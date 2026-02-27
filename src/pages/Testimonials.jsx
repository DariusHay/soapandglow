import SEO from "../components/SEO";

export default function Testimonials() {
  return (
    <div className="bg-neutral-50">
      <SEO title="Reviews | Soap Glow & Beauty Bar" description="Customer reviews and testimonials." />
      <section className="px-4 sm:px-6 lg:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-luxe uppercase text-brand-sage">Reviews</p>
          <h1 className="font-display text-4xl sm:text-5xl text-brand-ink mt-2">
            Real results. Real glow.
          </h1>
          <p className="mt-3 text-neutral-700">
            Add your customer testimonials here (cards/grid). This page is built to scale.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-soft">
                <p className="text-sm text-neutral-700">
                  “This soap made my skin feel so soft. The scent is beautiful and the bar looks amazing.”
                </p>
                <p className="mt-4 text-xs tracking-luxe uppercase text-brand-sage">Verified Customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}