import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { useCart } from "../../context/useCart";

export default function Success() {
  const { clearCart } = useCart();

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
