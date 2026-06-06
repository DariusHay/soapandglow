import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import { formatPrice } from "../utils/formatPrice";

export default function ProductCard({ product }) {
  const hasImage = product.image && product.image.trim() !== "";
  const isSignature = product.collection === "Signature Collection";

  return (
    <article className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft transition hover:shadow-xl">
      {/* <div
        className={`h-3 ${
          isSignature ? "bg-brand-plum" : "bg-brand-lime"
        }`}
      /> */}

      {hasImage ? (
        <Link to={`/shop/${product.slug}`} className="block aspect-[4/3.5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
          />
        </Link>
      ) : (
        <Link
          to={`/shop/${product.slug}`}
          className="flex aspect-[4/3] flex-col justify-between bg-gradient-to-br from-brand-stone via-white to-brand-stone/40 px-6 py-6"
        >
          <div>
            <p className="text-xs tracking-luxe uppercase text-brand-sage">
              Handcrafted Soap
            </p>
            <h3 className="font-display text-3xl text-brand-ink mt-2 leading-tight">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                isSignature
                  ? "bg-brand-plum text-white"
                  : "bg-brand-lime text-brand-ink"
              }`}
            >
              {product.collection}
            </span>

            <span className="text-lg font-semibold text-brand-ink">
              {formatPrice(product.price, "USD")}
            </span>
          </div>
        </Link>
      )}

      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs tracking-luxe uppercase text-neutral-500">
              {product.collection}
            </p>
            <Link
              to={`/shop/${product.slug}`}
              className="mt-1 block font-display text-2xl text-brand-ink hover:underline"
            >
              {product.name}
            </Link>
          </div>

          <p className="text-sm font-semibold text-brand-ink whitespace-nowrap">
            {formatPrice(product.price, "USD")}
          </p>
        </div>

        <p className="mt-3 text-sm text-neutral-700">
          {product.shortDescription}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-neutral-700">
          {product.benefits?.slice(0, 3).map((benefit) => (
            <li key={benefit} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-lime" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
