import { useMemo } from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { products } from "../data/products";
import { formatPrice } from "../utils/formatPrice";
import { buildOrderEmail, instagramUrl } from "../utils/orderLinks";

function InfoPill({ children }) {
  return (
    <span className="text-xs px-3 py-1 rounded-full bg-brand-stone text-brand-ink">
      {children}
    </span>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);

  if (!product) {
    return (
      <div className="px-4 sm:px-6 lg:px-10 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl text-brand-ink">Product not found</h1>
          <p className="mt-2 text-neutral-700">
            This item may have been moved or renamed.
          </p>
        </div>
      </div>
    );
  }

  const mainImg = product.images?.[0];

  return (
    <div className="bg-white">
      <SEO
        title={`${product.name} | Soap Glow & Beauty Bar`}
        description={product.shortDescription}
      />

      <section className="px-4 sm:px-6 lg:px-10 pt-10 pb-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-100">
            {mainImg ? (
              <img
                src={mainImg}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            ) : (
              <div className="aspect-square w-full grid place-items-center text-sm text-neutral-500">
                Add product image
              </div>
            )}
          </div>

          <div>
            <p className="text-xs tracking-luxe uppercase text-brand-sage">
              {product.category}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-brand-ink mt-2">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-xl text-brand-ink font-semibold">
                {formatPrice(product.price, product.currency)}
                {product.size ? (
                  <span className="text-sm font-normal text-neutral-600"> • {product.size}</span>
                ) : null}
              </p>
              <div className="flex gap-2 flex-wrap justify-end">
                <InfoPill>Shop-only</InfoPill>
                <InfoPill>FIRSTGLOW</InfoPill>
              </div>
            </div>

            <p className="mt-5 text-neutral-700 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-6 rounded-2xl border border-neutral-200 p-5">
              <p className="text-sm font-semibold text-brand-ink">
                Highlights
              </p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {(product.tags || []).slice(0, 4).map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-lime" />
                    <span className="capitalize">{t.replaceAll("-", " ")}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SHOP-ONLY CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={buildOrderEmail(product.name)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-lime text-brand-ink font-semibold hover:opacity-90 transition text-center"
              >
                Order via Email
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-neutral-300 hover:border-brand-sage transition text-center"
              >
                DM on Instagram
              </a>
              <button
                onClick={() => navigator.clipboard?.writeText(product.name)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-neutral-300 hover:border-neutral-500 transition text-center"
              >
                Copy Name
              </button>
            </div>

            {/* SHIPPING + OFFER */}
            <div className="mt-8 rounded-3xl border border-neutral-200 p-6 bg-neutral-50">
              <p className="text-sm font-semibold text-brand-ink">Shipping & offers</p>
              <ul className="mt-3 text-sm text-neutral-700 space-y-2">
                <li>📦 Orders under $50: <b>$6</b> flat-rate shipping</li>
                <li>🎉 Orders $50+: <b>FREE SHIPPING</b></li>
                <li>✨ New customer: <b>15% OFF + FREE SHIPPING</b> on orders $35+ with code <b>FIRSTGLOW</b></li>
              </ul>
              <p className="mt-4 text-xs text-neutral-500">
                Allergy note: Always review ingredients. Discontinue use if irritation occurs.
              </p>
            </div>

            {/* POLICY LINKS */}
            <div className="mt-8 border-t border-neutral-200 pt-6 text-sm text-neutral-700">
              <p className="font-semibold text-brand-ink">Need details?</p>
              <div className="mt-2 flex flex-wrap gap-3">
                <a className="underline underline-offset-4" href="/policies/shipping">Shipping</a>
                <a className="underline underline-offset-4" href="/policies/refunds">Refunds & Returns</a>
                <a className="underline underline-offset-4" href="/policies/terms">Terms</a>
                <a className="underline underline-offset-4" href="/policies/privacy">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}