import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

export default function ProductCard({ product }) {
  const img = product.images?.[0];

  return (
    <Link
      to={`/shop/${product.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-xl transition-shadow"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover scale-100 group-hover:scale-[1.04] transition-transform duration-500"
          />
        ) : (
          <div className="h-full w-full bg-neutral-100" />
        )}

        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="rounded-xl bg-white/80 backdrop-blur px-3 py-2 border border-white/60">
            <p className="text-xs tracking-luxe uppercase text-neutral-600">
              {product.category}
            </p>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-xl text-neutral-900 leading-tight">
                {product.name}
              </h3>
              <p className="text-sm font-medium text-neutral-900 whitespace-nowrap">
                {formatPrice(product.price, product.currency)}
              </p>
            </div>
            <p className="mt-1 text-sm text-neutral-700 line-clamp-2">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}