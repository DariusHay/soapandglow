const defaultAllowedOrigins = [
  "https://celebrated-biscotti-e21497.netlify.app",
  "https://soapglowandbeautybar.com",
  "https://www.soapglowandbeautybar.com",
];

function getCorsHeaders(origin = "") {
  const configuredOrigins = (process.env.ALLOWED_ORIGIN || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const allowedOrigins = new Set([
    ...defaultAllowedOrigins,
    ...configuredOrigins,
  ]);

  return {
    "Access-Control-Allow-Origin": allowedOrigins.has(origin)
      ? origin
      : defaultAllowedOrigins[0],
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    Vary: "Origin",
  };
}

function json(statusCode, body, extraHeaders = {}, origin = "") {
  return {
    statusCode,
    headers: {
      ...getCorsHeaders(origin),
      "Content-Type": "application/json",
      ...extraHeaders,
    },
    body: JSON.stringify(body),
  };
}

async function googleRequest(url, options = {}) {
  const response = await fetch(url, options);
  const payload = await response.json();

  if (!response.ok) {
    throw new Error(
      payload.error?.message || "Google reviews could not be loaded."
    );
  }

  return payload;
}

function normalizeBusinessName(name = "") {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isSoapGlowBusiness(place) {
  const name = normalizeBusinessName(place.displayName?.text);
  return name.includes("soapglow") && name.includes("beautybar");
}

async function findSoapGlowPlace(apiKey) {
  const queries = [
    "SoapGlowandBeautyBar",
    "Soap Glow & Beauty Bar",
    "Soap Glow and Beauty Bar Orlando Florida",
  ];

  for (const textQuery of queries) {
    const payload = await googleRequest(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "places.id,places.displayName",
        },
        body: JSON.stringify({
          textQuery,
          maxResultCount: 10,
          locationBias: {
            circle: {
              center: {
                latitude: 28.54642075,
                longitude: -81.2843008,
              },
              radius: 5000,
            },
          },
        }),
      }
    );

    const match = payload.places?.find(isSoapGlowBusiness);
    if (match) return match;
  }

  return null;
}

export async function handler(event) {
  const origin = event.headers?.origin || "";

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: getCorsHeaders(origin) };
  }

  if (event.httpMethod !== "GET") {
    return json(405, { error: "Method not allowed" }, {}, origin);
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const configuredPlaceId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey) {
    return json(
      503,
      { error: "Google reviews are not configured yet." },
      {},
      origin
    );
  }

  try {
    let placeId = configuredPlaceId;

    if (!placeId) {
      const place = await findSoapGlowPlace(apiKey);
      placeId = place?.id;
    }

    if (!placeId) {
      return json(
        404,
        { error: "Google Business Profile was not found." },
        {},
        origin
      );
    }

    const fields = [
      "displayName",
      "rating",
      "userRatingCount",
      "reviews",
      "googleMapsUri",
    ].join(",");

    const place = await googleRequest(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": fields,
        },
      }
    );

    if (!isSoapGlowBusiness(place)) {
      return json(
        409,
        {
          error:
            "The configured Google listing does not match Soap Glow & Beauty Bar.",
        },
        {},
        origin
      );
    }

    const reviews = (place.reviews || []).map((review) => ({
      name: review.authorAttribution?.displayName || "Google reviewer",
      profileUrl: review.authorAttribution?.uri || "",
      photoUrl: review.authorAttribution?.photoUri || "",
      rating: review.rating,
      text: review.text?.text || review.originalText?.text || "",
      published: review.relativePublishTimeDescription || "",
      reviewUrl: review.googleMapsUri || place.googleMapsUri || "",
    }));

    return json(
      200,
      {
        name: place.displayName?.text || "Soap Glow & Beauty Bar",
        rating: place.rating,
        reviewCount: place.userRatingCount,
        googleMapsUrl: place.googleMapsUri || "",
        reviews,
      },
      { "Cache-Control": "public, max-age=3600, s-maxage=21600" },
      origin
    );
  } catch (error) {
    console.error("Google reviews error:", error);
    return json(
      502,
      {
        error: error.message || "Google reviews could not be loaded.",
      },
      {},
      origin
    );
  }
}
