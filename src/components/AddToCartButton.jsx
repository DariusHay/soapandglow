import { useState } from "react";
import { useCart } from "../context/useCart";

export default function AddToCartButton({
  product,
  quantity = 1,
  className = "",
  label = "Add to Cart",
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    addItem(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[
        "inline-flex items-center justify-center rounded-full bg-brand-lime px-4 py-2 text-sm font-semibold text-brand-ink transition hover:opacity-90",
        className,
      ].join(" ")}
    >
      {added ? "Added" : label}
    </button>
  );
}
