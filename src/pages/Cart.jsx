import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useCart } from "../context/useCart";
import { formatPrice } from "../utils/formatPrice";

const checkoutEndpoint =
  import.meta.env.VITE_SQUARE_CHECKOUT_ENDPOINT ||
  (window.location.hostname.endsWith("netlify.app")
    ? "/.netlify/functions/create-square-checkout"
    : "https://celebrated-biscotti-e21497.netlify.app/.netlify/functions/create-square-checkout");
const pendingOrderKey = "soap-glow-pending-order";

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
  const [fulfillmentMethod, setFulfillmentMethod] = useState("shipping");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [pickupAcknowledged, setPickupAcknowledged] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const isPickup = fulfillmentMethod === "pickup";

  async function handleCheckout() {
    if (!items.length) return;

    const trimmedCustomerName = customerName.trim();
    const trimmedCustomerEmail = customerEmail.trim();
    const trimmedCustomerPhone = customerPhone.trim();

    if (!trimmedCustomerName || !trimmedCustomerEmail || !trimmedCustomerPhone) {
      setCheckoutError("Enter your name, email, and phone number before checkout.");
      return;
    }

    if (isPickup && !pickupAcknowledged) {
      setCheckoutError("Confirm the pickup notice before checkout.");
      return;
    }

    setCheckoutError("");
    setIsCheckingOut(true);

    try {
      const response = await fetch(checkoutEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            slug: item.product.slug,
            quantity: item.quantity,
          })),
          fulfillmentMethod,
          ...(isPickup
            ? {
                pickupContact: {
                  name: trimmedCustomerName,
                  phone: trimmedCustomerPhone,
                },
              }
            : {}),
        }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to start checkout.");
      }

      window.sessionStorage.setItem(
        "soap-glow-checkout-fulfillment",
        fulfillmentMethod
      );
      window.sessionStorage.setItem(
        pendingOrderKey,
        JSON.stringify({
          orderId: payload.orderId || "Pending Square order",
          fulfillmentMethod,
          customerName: trimmedCustomerName,
          customerEmail: trimmedCustomerEmail,
          customerPhone: trimmedCustomerPhone,
          items: items.map((item) => ({
            name: item.product.name,
            slug: item.product.slug,
            price: item.product.price,
            quantity: item.quantity,
            lineTotal: item.lineTotal,
          })),
          itemCount,
          merchandiseSubtotal,
          bundleSavings,
          shipping: isPickup ? 0 : shipping,
          subtotal,
          estimatedTotalBeforeTax: subtotal + (isPickup ? 0 : shipping),
          createdAt: new Date().toISOString(),
        })
      );
      window.location.href = payload.checkoutUrl;
    } catch (error) {
      setCheckoutError(error.message);
      setIsCheckingOut(false);
    }
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
            Your cart
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

                <div className="mt-5 rounded-2xl border border-neutral-200 p-4">
                  <p className="text-sm font-semibold text-brand-ink">
                    Order contact
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    This helps the owner identify and follow up on your order.
                  </p>
                  <div className="mt-4 grid gap-3">
                    <label className="text-xs font-medium text-brand-ink">
                      Name
                      <input
                        type="text"
                        value={customerName}
                        onChange={(event) => setCustomerName(event.target.value)}
                        autoComplete="name"
                        maxLength="255"
                        className="mt-1 h-11 w-full rounded-xl border border-neutral-300 bg-white px-3 text-sm"
                      />
                    </label>
                    <label className="text-xs font-medium text-brand-ink">
                      Email
                      <input
                        type="email"
                        value={customerEmail}
                        onChange={(event) => setCustomerEmail(event.target.value)}
                        autoComplete="email"
                        maxLength="255"
                        className="mt-1 h-11 w-full rounded-xl border border-neutral-300 bg-white px-3 text-sm"
                      />
                    </label>
                    <label className="text-xs font-medium text-brand-ink">
                      Mobile phone
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(event) => setCustomerPhone(event.target.value)}
                        autoComplete="tel"
                        maxLength="24"
                        className="mt-1 h-11 w-full rounded-xl border border-neutral-300 bg-white px-3 text-sm"
                      />
                    </label>
                  </div>
                </div>

                <fieldset className="mt-5">
                  <legend className="text-sm font-semibold text-brand-ink">
                    Fulfillment
                  </legend>
                  <div className="mt-3 grid gap-3">
                    <label className="flex cursor-pointer gap-3 rounded-2xl border border-neutral-200 p-4">
                      <input
                        type="radio"
                        name="fulfillment"
                        value="shipping"
                        checked={!isPickup}
                        onChange={() => setFulfillmentMethod("shipping")}
                      />
                      <span>
                        <span className="block text-sm font-semibold text-brand-ink">
                          Ship my order
                        </span>
                        <span className="mt-1 block text-xs text-neutral-600">
                          Shipping address collected by Square.
                        </span>
                      </span>
                    </label>

                    <label className="flex cursor-pointer gap-3 rounded-2xl border border-neutral-200 p-4">
                      <input
                        type="radio"
                        name="fulfillment"
                        value="pickup"
                        checked={isPickup}
                        onChange={() => setFulfillmentMethod("pickup")}
                      />
                      <span>
                        <span className="block text-sm font-semibold text-brand-ink">
                          Prearranged local pickup
                        </span>
                        <span className="mt-1 block text-xs text-neutral-600">
                          No shipping charge. Pickup must be coordinated directly
                          with the owner.
                        </span>
                      </span>
                    </label>
                  </div>
                </fieldset>

                {isPickup ? (
                  <div className="mt-4 rounded-2xl bg-brand-stone p-4">
                    <p className="text-sm font-semibold text-brand-ink">
                      Arrange your pickup
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-700">
                      The owner will call or text you within 24–48 hours to
                      confirm pickup details. Do not arrive until pickup has been
                      confirmed.
                    </p>
                    <div className="mt-3 flex gap-3 text-sm">
                      <a
                        href="sms:+13213933483"
                        className="underline underline-offset-4"
                      >
                        Text owner
                      </a>
                      <a
                        href="tel:+13213933483"
                        className="underline underline-offset-4"
                      >
                        Call owner
                      </a>
                    </div>
                    <div className="mt-4 grid gap-3">
                      <label className="flex gap-2 text-xs leading-relaxed text-neutral-700">
                        <input
                          type="checkbox"
                          checked={pickupAcknowledged}
                          onChange={(event) =>
                            setPickupAcknowledged(event.target.checked)
                          }
                          className="mt-1"
                        />
                        <span>
                          I understand pickup is not confirmed until the owner
                          contacts me within 24–48 hours.
                        </span>
                      </label>
                    </div>
                  </div>
                ) : null}

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
                    <span>{isPickup ? "Local pickup" : "Standard shipping"}</span>
                    <span>{isPickup ? "Free" : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sales tax</span>
                    <span>Calculated by Square</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-neutral-200 pt-5">
                  <div className="flex items-center justify-between text-lg font-semibold text-brand-ink">
                    <span>Before tax</span>
                    <span>{formatPrice(subtotal + (isPickup ? 0 : shipping))}</span>
                  </div>
                </div>

                {checkoutError ? (
                  <p className="mt-4 text-sm text-red-700" role="alert">
                    {checkoutError}
                  </p>
                ) : null}

                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="mt-6 w-full rounded-full bg-brand-lime px-6 py-3 font-semibold text-brand-ink transition hover:opacity-90"
                >
                  {isCheckingOut ? "Opening Square..." : "Checkout with Square"}
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
