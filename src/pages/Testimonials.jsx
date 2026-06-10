import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import { googleReviewsUrl } from "../utils/orderLinks";

const reviewsEndpoint =
  import.meta.env.VITE_GOOGLE_REVIEWS_ENDPOINT ||
  (window.location.hostname.endsWith("netlify.app")
    ? "/.netlify/functions/google-reviews"
    : "https://celebrated-biscotti-e21497.netlify.app/.netlify/functions/google-reviews");

function isSoapGlowBusiness(name = "") {
  const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return (
    normalizedName.includes("soapglow") &&
    normalizedName.includes("beautybar")
  );
}

function StarRating({ rating = 5 }) {
  return (
    <div
      className="flex gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < Math.round(rating) ? "text-brand-lime" : "text-neutral-300"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [googleData, setGoogleData] = useState(null);
  const [reviewsError, setReviewsError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadReviews() {
      try {
        const separator = reviewsEndpoint.includes("?") ? "&" : "?";
        const response = await fetch(`${reviewsEndpoint}${separator}v=2`, {
          signal: controller.signal,
          cache: "no-store",
        });
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || "Google reviews could not be loaded.");
        }

        if (!isSoapGlowBusiness(payload.name)) {
          throw new Error(
            "Google reviews are temporarily unavailable for this business."
          );
        }

        setGoogleData(payload);
      } catch (error) {
        if (error.name !== "AbortError") {
          setReviewsError(error.message);
        }
      }
    }

    loadReviews();
    return () => controller.abort();
  }, []);

  const liveGoogleUrl = googleData?.googleMapsUrl || googleReviewsUrl;

  return (
    <div className="bg-white">
      <SEO
        title="Reviews | Soap Glow & Beauty Bar"
        description="Read customer reviews for Soap Glow & Beauty Bar and share your experience on Google."
      />

      <section className="bg-brand-ink px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-luxe uppercase text-brand-lime">
            Customer Reviews
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl sm:text-6xl">
            Real results. Real glow.
          </h1>
          <p className="mt-4 max-w-2xl text-white/80 sm:text-lg">
            See what customers are saying about our handcrafted soaps, then
            share your own Soap Glow experience.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={liveGoogleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-lime px-7 py-3 text-center font-semibold text-brand-ink transition hover:opacity-90"
            >
              Leave a Google review
            </a>
            <a
              href={liveGoogleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/50 px-7 py-3 text-center font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Read reviews on Google
            </a>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs tracking-luxe uppercase text-brand-sage">
                Google Reviews
              </p>
              <h2 className="mt-2 font-display text-4xl text-brand-ink sm:text-5xl">
                Kind words from customers
              </h2>
            </div>
            {googleData?.rating ? (
              <div className="rounded-2xl border border-neutral-200 bg-white px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl text-brand-ink">
                    {googleData.rating.toFixed(1)}
                  </span>
                  <StarRating rating={googleData.rating} />
                </div>
                <p className="mt-1 text-xs text-neutral-600">
                  Based on {googleData.reviewCount} Google reviews
                </p>
              </div>
            ) : null}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {!googleData && !reviewsError
              ? Array.from({ length: 3 }, (_, index) => (
                  <div
                    key={index}
                    className="min-h-64 animate-pulse rounded-3xl border border-neutral-200 bg-white p-6"
                    aria-label="Loading Google review"
                  >
                    <div className="h-4 w-28 rounded bg-neutral-200" />
                    <div className="mt-7 h-4 rounded bg-neutral-200" />
                    <div className="mt-3 h-4 rounded bg-neutral-200" />
                    <div className="mt-3 h-4 w-2/3 rounded bg-neutral-200" />
                  </div>
                ))
              : null}

            {googleData?.reviews?.map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="flex min-h-64 flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft"
              >
                <div className="flex items-center justify-between gap-4">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-neutral-500">
                    {review.published}
                  </span>
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-7 text-neutral-700">
                  “{review.text}”
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-4">
                  {review.photoUrl ? (
                    <img
                      src={review.photoUrl}
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : null}
                  <div>
                    <a
                      href={review.profileUrl || liveGoogleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-brand-ink hover:underline"
                    >
                      {review.name}
                    </a>
                    <p className="text-xs text-neutral-500">Review from Google</p>
                  </div>
                </div>
              </article>
            ))}

            {reviewsError ? (
              <aside className="flex min-h-64 flex-col justify-between rounded-3xl bg-brand-stone p-6 sm:col-span-2 lg:col-span-3">
                <div>
                  <p className="text-xs tracking-luxe uppercase text-brand-plum">
                    Google Reviews
                  </p>
                  <h3 className="mt-3 max-w-xl font-display text-3xl text-brand-ink">
                    Reviews are available on Google.
                  </h3>
                  <p className="mt-3 max-w-xl text-sm text-neutral-700">
                    {reviewsError}
                  </p>
                </div>
                <a
                  href={liveGoogleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit rounded-full bg-brand-ink px-6 py-3 font-semibold text-white"
                >
                  View Google reviews
                </a>
              </aside>
            ) : null}

            {googleData ? (
            <aside className="flex min-h-64 flex-col justify-between rounded-3xl bg-brand-stone p-6">
              <div>
                <p className="text-xs tracking-luxe uppercase text-brand-plum">
                  Share Your Glow
                </p>
                <h3 className="mt-3 max-w-xl font-display text-3xl text-brand-ink sm:text-4xl">
                  Tried our handcrafted soap?
                </h3>
                <p className="mt-3 max-w-xl text-sm text-neutral-700">
                  Your honest Google review helps new customers discover Soap
                  Glow & Beauty Bar.
                </p>
              </div>
              <a
                href={liveGoogleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center rounded-full bg-brand-ink px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Leave a Google review
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </a>
            </aside>
            ) : null}
          </div>

          <p className="mt-6 text-xs text-neutral-500">
            Google reviews are selected and provided by Google. Review text and
            ratings belong to their respective authors.
          </p>
        </div>
      </section>
    </div>
  );
}
