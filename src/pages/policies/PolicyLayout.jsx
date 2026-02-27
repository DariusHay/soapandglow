import SEO from "../../components/SEO";

export default function PolicyLayout({ title, effectiveDate, children }) {
  return (
    <div className="bg-white">
      <SEO title={`${title} | Soap Glow & Beauty Bar`} description={`${title} for Soap Glow & Beauty Bar.`} />
      <section className="px-4 sm:px-6 lg:px-10 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-luxe uppercase text-brand.sage">Policies</p>
          <h1 className="font-display text-4xl sm:text-5xl text-brand.ink mt-2">{title}</h1>
          <p className="mt-3 text-sm text-neutral-600">
            Effective Date: <b>{effectiveDate}</b>
          </p>

          <div className="mt-8 space-y-5 text-neutral-700">
  <div className="space-y-3">
    {children}
  </div>
</div>
        </div>
      </section>
    </div>
  );
}