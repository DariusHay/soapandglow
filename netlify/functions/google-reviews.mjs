const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

function json(statusCode, body, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      ...corsHeaders,
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

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders };
  }

  if (event.httpMethod !== "GET") {
    return json(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const configuredPlaceId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey) {
    return json(503, { error: "Google reviews are not configured yet." });
  }

  try {
    let placeId = configuredPlaceId;

    if (!placeId) {
      const searchPayload = await googleRequest(
        "https://places.googleapis.com/v1/places:searchText",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": "places.id",
          },
          body: JSON.stringify({
            textQuery: "Soap Glow and Beauty Bar Orlando Florida",
            maxResultCount: 1,
          }),
        }
      );

      placeId = searchPayload.places?.[0]?.id;
    }

    if (!placeId) {
      return json(404, { error: "Google Business Profile was not found." });
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
      { "Cache-Control": "public, max-age=3600, s-maxage=21600" }
    );
  } catch (error) {
    console.error("Google reviews error:", error);
    return json(502, {
      error: error.message || "Google reviews could not be loaded.",
    });
  }
}
