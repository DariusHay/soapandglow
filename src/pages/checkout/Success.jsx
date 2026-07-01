import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { useCart } from "../../context/useCart";
import { formatPrice } from "../../utils/formatPrice";

const pendingOrderKey = "soap-glow-pending-order";

const encodeForm = (data) => new URLSearchParams(data).toString();

function formatOrderDetails(order) {
  const items = order.items
    ?.map(
      (item) =>
        `${item.quantity} x ${item.name} at ${formatPrice(item.price)} each`
    )
    .join("\n");

  return [
    `Square order ID: ${order.orderId || "Not provided"}`,
    `Customer name: ${order.customerName || "Not provided"}`,
    `Customer email: ${order.customerEmail || "Not provided"}`,
    `Customer phone: ${order.customerPhone || "Not provided"}`,
    `Fulfillment: ${order.fulfillmentMethod || "Not provided"}`,
    `Items:\n${items || "No item details found"}`,
    `Merchandise subtotal: ${formatPrice(order.merchandiseSubtotal || 0)}`,
    `Bundle savings: ${formatPrice(order.bundleSavings || 0)}`,
    `Shipping: ${formatPrice(order.shipping || 0)}`,
    `Estimated total before tax: ${formatPrice(order.estimatedTotalBeforeTax || 0)}`,
    `Checkout started: ${order.createdAt || "Not provided"}`,
  ].join("\n\n");
}

export default function Success() {
  const { clearCart } = useCart();
  const [notificationStatus, setNotificationStatus] = useState("checking");
  const isPickup =
    window.sessionStorage.getItem("soap-glow-checkout-fulfillment") ===
    "pickup";

  useEffect(() => {
    async function sendOrderNotification() {
      const pendingOrder = window.sessionStorage.getItem(pendingOrderKey);

      if (!pendingOrder) {
        setNotificationStatus("empty");
        return;
      }

      try {
        const order = JSON.parse(pendingOrder);
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodeForm({
            "form-name": "order-notification",
            "bot-field": "",
            "square-order-id": order.orderId || "Not provided",
            "customer-name": order.customerName || "Not provided",
            "customer-email": order.customerEmail || "Not provided",
            "customer-phone": order.customerPhone || "Not provided",
            fulfillment: order.fulfillmentMethod || "Not provided",
            items:
              order.items
                ?.map((item) => `${item.quantity} x ${item.name}`)
                .join(", ") || "No item details found",
            subtotal: formatPrice(order.estimatedTotalBeforeTax || 0),
            details: formatOrderDetails(order),
          }),
        });

        if (!response.ok) {
          throw new Error("Unable to send order notification.");
        }

        window.sessionStorage.removeItem(pendingOrderKey);
        setNotificationStatus("sent");
      } catch {
        setNotificationStatus("error");
      }
    }

    sendOrderNotification();
  }, []);

  return (
    <div className="bg-white">
      <SEO
        title="Order Received | Soap Glow & Beauty Bar"
        description="Thank you for your Soap Glow & Beauty Bar order."
      />

      <section className="px-4 sm:px-6 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-soft">
          <p className="text-xs tracking-luxe uppercase text-brand-sage">
            Thank you
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-brand-ink mt-2">
            Your order was received
          </h1>
          <p className="mt-4 text-neutral-700">
            Square will send the payment receipt to the email used at checkout.
            Please keep that receipt for your records.
          </p>
          {isPickup ? (
            <div className="mt-5 rounded-2xl bg-brand-stone p-4 text-sm text-neutral-700">
              This is a prearranged pickup order. The owner will call or text
              within 24–48 hours to confirm pickup details. Please do not arrive
              until your pickup has been confirmed.
            </div>
          ) : null}
          {notificationStatus === "sent" ? (
            <p className="mt-5 rounded-2xl bg-brand-stone p-4 text-sm font-semibold text-brand-ink">
              Order notification sent to Soap Glow & Beauty Bar.
            </p>
          ) : null}
          {notificationStatus === "error" ? (
            <p className="mt-5 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">
              Your payment was completed, but the order email notification could
              not be sent automatically. Please contact Soap Glow & Beauty Bar
              with your Square receipt.
            </p>
          ) : null}
          <button
            type="button"
            onClick={clearCart}
            className="mt-6 rounded-full bg-brand-lime px-6 py-3 font-semibold text-brand-ink"
          >
            Clear cart
          </button>
          <Link
            to="/shop"
            className="ml-3 inline-flex rounded-full border border-neutral-300 px-6 py-3"
          >
            Continue shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
