import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useCart } from "../context/useCart";
import { formatPrice } from "../utils/formatPrice";

const checkoutEndpoint =
  import.meta.env.VITE_SQUARE_CHECKOUT_ENDPOINT ||
  "/.netlify/functions/create-square-checkout";

function calculateShipping(subtotal) {
  if (subtotal <= 25) return 6;
  if (subtotal <= 50) return 8.5;
  if (subtotal <= 75) return 10;
  if (subtotal <= 100) return 12;
  if (subtotal <= 150) return 14;
  return 16;
}

export default function Cart() {
  const {
    items,
    itemCount,
    merchandiseSubtotal,
    bundleSavings,
    subtotal,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();
  const shipping = calculateShipping(subtotal);

  async function handleCheckout() {
    if (!items.length) return;

    const response = await fetch(checkoutEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: items.map((item) => ({
          slug: item.product.slug,
          quantity: item.quantity,
        })),
      }),
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.error || "Unable to start checkout.");
    }

    window.location.href = payload.checkoutUrl;
  }

  return (
    <div className="bg-neutral-50">
      <SEO
        title="Cart | Soap Glow & Beauty Bar"
        description="Review your Soap Glow & Beauty Bar order before secure Square checkout."
      />

      <section className="px-4 sm:px-6 lg:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-luxe uppercase text-brand-sage">Cart</p>
          <h1 className="font-display text-4xl sm:text-5xl text-brand-ink mt-2">
            Your glow bag
          </h1>

          {items.length ? (
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
              <div className="rounded-3xl border border-neutral-200 bg-white shadow-soft">
                {items.map((item) => (
                  <div
                    key={item.product.slug}
                    className="grid gap-4 border-b border-neutral-200 p-4 last:border-b-0 sm:grid-cols-[96px_1fr_auto]"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-24 w-24 rounded-2xl object-cover object-top"
                    />

                    <div>
                      <p className="text-xs tracking-luxe uppercase text-brand-sage">
                        {item.product.collection}
                      </p>
                      <Link
                        to={`/shop/${item.product.slug}`}
                        className="mt-1 block font-display text-2xl text-brand-ink hover:underline"
                      >
                        {item.product.name}
                      </Link>
                      <p className="mt-2 text-sm text-neutral-600">
                        {formatPrice(item.product.price)} each
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.slug)}
                        className="mt-3 text-sm text-neutral-600 underline underline-offset-4 hover:text-brand-ink"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:block sm:text-right">
                      <label className="text-sm text-neutral-700">
                        <span className="sr-only">Quantity</span>
                        <input
                          type="number"
                          min="1"
                          max="20"
                          value={item.quantity}
                          onChange={(event) =>
                            updateQuantity(item.product.slug, event.target.value)
                          }
                          className="h-11 w-20 rounded-full border border-neutral-300 px-4 text-center"
                        />
                      </label>
                      <p className="text-lg font-semibold text-brand-ink sm:mt-5">
                        {formatPrice(item.lineTotal)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="h-fit rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold text-brand-ink">
                  Order summary
                </p>

                <div className="mt-5 space-y-3 text-sm text-neutral-700">
                  <div className="flex justify-between">
                    <span>{itemCount} item{itemCount === 1 ? "" : "s"}</span>
                    <span>{formatPrice(merchandiseSubtotal)}</span>
                  </div>
                  {bundleSavings ? (
                    <div className="flex justify-between text-brand-sage">
                      <span>Bundle savings</span>
                      <span>-{formatPrice(bundleSavings)}</span>
                    </div>
                  ) : null}
                  <div className="flex justify-between">
                    <span>Standard shipping</span>
                    <span>{formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sales tax</span>
                    <span>Calculated by Square</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-neutral-200 pt-5">
                  <div className="flex items-center justify-between text-lg font-semibold text-brand-ink">
                    <span>Before tax</span>
                    <span>{formatPrice(subtotal + shipping)}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="mt-6 w-full rounded-full bg-brand-lime px-6 py-3 font-semibold text-brand-ink transition hover:opacity-90"
                >
                  Checkout with Square
                </button>

                <button
                  type="button"
                  onClick={clearCart}
                  className="mt-3 w-full rounded-full border border-neutral-300 px-6 py-3 text-sm transition hover:border-brand-sage"
                >
                  Clear cart
                </button>

                <p className="mt-4 text-xs text-neutral-500">
                  Secure payment is completed on Square. Card details are never
                  stored by this website.
                </p>
              </aside>
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-8 shadow-soft">
              <p className="text-neutral-700">Your cart is empty.</p>
              <Link
                to="/shop"
                className="mt-5 inline-flex rounded-full bg-brand-lime px-6 py-3 font-semibold text-brand-ink"
              >
                Shop soaps
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
