import SEO from "../components/SEO";
import { instagramUrl } from "../utils/orderLinks";

export default function Contact() {
  return (
    <div className="bg-white">
      <SEO title="Contact | Soap Glow & Beauty Bar" description="Contact Soap Glow & Beauty Bar for orders, questions, or collaborations." />
      <section className="px-4 sm:px-6 lg:px-10 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-luxe uppercase text-brand-sage">Contact</p>
          <h1 className="font-display text-4xl sm:text-5xl text-brand-ink mt-2">
            Let’s connect
          </h1>
          <p className="mt-3 text-neutral-700">
            Questions, collaborations, or ready to order? Reach us below.
          </p>

          <div className="mt-8 rounded-3xl border border-neutral-200 p-6 bg-neutral-50">
            <p className="text-sm font-semibold text-brand-ink">Email</p>
            <a className="underline underline-offset-4 text-neutral-700" href="mailto:Ladyjo3000@gmail.com">
              Ladyjo3000@gmail.com
            </a>

            <p className="text-sm font-semibold text-brand-ink mt-6">Instagram</p>
            <a className="underline underline-offset-4 text-neutral-700" href={instagramUrl} target="_blank" rel="noreferrer">
              @SoapGlowBeautyBar
            </a>

            <p className="text-sm font-semibold text-brand-ink mt-6">Vendor availability</p>
            <p className="text-sm text-neutral-700">
              Available to be a vendor for events. Email with date, location, and expected attendance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}