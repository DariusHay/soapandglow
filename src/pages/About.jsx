import SEO from "../components/SEO";

export default function About() {
  return (
    <div className="bg-white">
      <SEO title="About | Soap Glow & Beauty Bar" description="Learn about our mission, values, and founder Lady J." />
      <section className="px-4 sm:px-6 lg:px-10 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-luxe uppercase text-brand-sage">About</p>
          <h1 className="font-display text-4xl sm:text-5xl text-brand-ink mt-2">
            Faith-driven. Beauty-focused. Entrepreneurial.
          </h1>

          <p className="mt-5 text-neutral-700 leading-relaxed">
            Guided by faith and fueled by purpose, Soap Glow & Beauty Bar creates handcrafted,
            organic soap that nourishes skin and elevates spirit. We’re building a community where
            everyone—regardless of gender—can discover their natural glow through intentional self-care,
            quality ingredients, and products made with prayer, passion, and hustle.
          </p>

          <div className="mt-8 rounded-3xl border border-neutral-200 p-6 bg-neutral-50">
            <p className="text-sm font-semibold text-brand-ink">Meet Lady J</p>
            <p className="mt-2 text-sm text-neutral-700">
              I’m Joanna J, a faith-driven beautypreneur blending style, hustle and purpose.
              Guided by God, I share beauty, fashion and entrepreneurship insights to inspire women
              to glow inside and out.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}