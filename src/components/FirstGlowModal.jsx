import { useEffect, useState } from "react";

export default function FirstGlowModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("firstglow_seen");
    if (seen) return;

    const t = setTimeout(() => setOpen(true), 9000); // ~9s
    return () => clearTimeout(t);
  }, []);

  function close() {
    localStorage.setItem("firstglow_seen", "1");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-soft border border-neutral-200 overflow-hidden">
        <div className="p-6 sm:p-7">
          <p className="text-xs tracking-luxe uppercase text-brand-sage">
            First order special
          </p>
          <h3 className="font-display text-4xl text-brand-ink mt-2">
            15% OFF + Free Shipping
          </h3>
          <p className="mt-3 text-neutral-700">
            On orders <b>$35+</b>. Enter your email to get your code:
          </p>

          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 px-5 py-3 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-sage"
            />
            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText("FIRSTGLOW");
                close();
              }}
              className="px-6 py-3 rounded-full bg-brand-lime text-brand-ink font-semibold hover:opacity-90 transition"
            >
              Get My Discount
            </button>
          </form>

          <div className="mt-4 text-sm text-neutral-700">
            Code: <span className="font-semibold text-brand-plum">FIRSTGLOW</span>
          </div>

          <button
            onClick={close}
            className="mt-6 text-sm underline underline-offset-4 text-neutral-600 hover:text-neutral-900"
          >
            No thanks
          </button>
        </div>

        <div className="h-2 bg-gradient-to-r from-brand-lime via-brand-sage to-brand-purple" />
      </div>
    </div>
  );
}