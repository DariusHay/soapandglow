import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import FirstGlowModal from "../components/FirstGlowModal";
import ProductCard from "../components/ProductCard";
import EmailSignup from "../components/EmailSignup";
import { products } from "../data/products";
import { instagramUrl } from "../utils/orderLinks";
import { offers } from "../data/offers";
import flyerImg from "../assets/soapglow.jpg";
import heroImg from "../assets/hero.jpg";

function OfferCard({ name, details, price, compareAt, savings, note, featured }) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-soft transition",
        featured
          ? "border-brand-lime/60 ring-1 ring-brand-lime/20"
          : "border-neutral-200 hover:border-brand-sage/60",
      ].join(" ")}
    >
      {/* subtle corner glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-brand-lime/15 blur-3xl" />

      {/* badge */}
      {savings ? (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center rounded-full bg-brand-lime text-brand-ink px-3 py-1 text-[11px] font-semibold">
            SAVE ${savings}
          </span>
        </div>
      ) : null}

      {featured ? (
        <div className="mb-3">
          <span className="inline-flex items-center rounded-full bg-brand-stone text-brand-ink px-3 py-1 text-[11px] font-semibold">
            Best Value
          </span>
        </div>
      ) : null}

      <p className="text-sm font-semibold text-brand-ink">{name}</p>
      <p className="text-sm text-neutral-700 mt-1">{details}</p>
      {note ? <p className="text-xs text-neutral-500 mt-2">{note}</p> : null}

      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-3xl font-semibold text-brand-ink">${price}</p>
          {compareAt ? (
            <p className="text-xs text-neutral-500 line-through">${compareAt}</p>
          ) : (
            <p className="text-xs text-neutral-500">USD</p>
          )}
        </div>

        <div className="text-xs text-neutral-600">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 group-hover:border-brand-sage/60 transition">
            Shop-only • Email/DM
          </span>
        </div>
      </div>
    </div>
  );
}

function OfferLine({ label, price, compareAt, savings }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-white/25 last:border-b-0">
      <div>
        <p className="text-sm font-semibold text-white">{label}</p>
        {compareAt ? (
          <p className="text-xs text-white/75">
            Was <span className="line-through">${compareAt}</span>
            {savings ? <span className="ml-2 text-brand-lime font-semibold">Save ${savings}</span> : null}
          </p>
        ) : null}
      </div>

      <p className="text-sm font-semibold text-white">${price}</p>
    </div>
  );
}

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="bg-white">
      <SEO
        title="Soap Glow & Beauty Bar"
        description="Handcrafted organic soaps made with purpose—shop bestsellers, bundles, and glow-ready essentials."
      />

      {/* Modal (optional) */}
      <FirstGlowModal />

      {/* 1) FLYER SECTION (TOP, clean, no text above it) */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-6">
          <div className="rounded-3xl border border-neutral-200 shadow-soft overflow-hidden bg-white">
            <img
              src={flyerImg}
              alt="Soap Glow & Beauty Bar flyer"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 2) HERO SECTION (UNDER FLYER) */}
      <section className="relative overflow-hidden mt-10">
        {/* background image */}
        <img
          src={heroImg}
          alt="Handcrafted soaps on a table with lavender"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* readability overlays (not glossy—just contrast) */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/55" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-14 text-white">
          {/* kicker */}
          <p className="text-xs tracking-luxe uppercase text-white/85">
            Faith-driven • Organic • Handmade
          </p>

          {/* headline (NOT “Elevate Your Glow”) */}
          <h1
            className="font-display text-5xl sm:text-6xl mt-3 max-w-3xl"
            style={{ textShadow: "0 10px 35px rgba(0,0,0,0.55)" }}
          >
            Luxury, handcrafted soap—made with purpose.
          </h1>

          {/* supporting copy */}
          <p
            className="mt-4 text-white/90 max-w-xl text-base sm:text-lg"
            style={{ textShadow: "0 8px 22px rgba(0,0,0,0.55)" }}
          >
            Nourish your skin with organic ingredients and intentional self-care.
            Built for everyday glow—crafted with prayer, passion, and hustle.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/shop"
              className="px-7 py-3 rounded-full bg-brand-lime text-brand-ink font-semibold hover:opacity-90 transition text-center shadow-soft"
            >
              Shop Bestsellers
            </Link>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 rounded-full border border-white/70 text-white hover:border-white transition text-center backdrop-blur-sm bg-white/10"
            >
              DM to Order
            </a>
          </div>

          {/* QUICK WINS INSIDE HERO (premium panel) */}
          <div className="mt-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-5 sm:p-6 shadow-soft">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
              <p className="text-white/90">
                💰 Single Bars <b className="text-white">Starting at $8</b>
              </p>
              <p className="text-white/90">
                🎁 Bundles: <b className="text-white">Save up to $15</b>
              </p>
              <p className="text-white/90">
                📦 Free Shipping for Orders <b className="text-white">$50+</b>
              </p>
              <p className="text-white/90">
                ✨ New Customers Receive <b className="text-white">15% off + free ship $35+</b>
                {/* <span className="ml-2 inline-flex items-center rounded-full bg-brand-lime text-brand-ink px-3 py-1 text-xs font-semibold">
                  FIRSTGLOW
                </span> */}
              </p>
            </div>
          </div>
        </div>

        {/* soft transition */}
        <div className="h-10 bg-gradient-to-b from-black/40 to-white" />
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-4 sm:px-6 lg:px-10 py-14 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-luxe uppercase text-brand-sage">
            Featured
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-ink mt-2">
            Bestsellers worth repeating
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* BUNDLES / GIFT SETS / SUBSCRIPTION (Option A: Boutique tiles) */}
      {/* <section className="px-4 sm:px-6 lg:px-10 py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs tracking-luxe uppercase text-brand-sage">Deals</p>
              <h2 className="font-display text-4xl sm:text-5xl text-brand-ink mt-2">
                Bundles, gift sets & subscriptions
              </h2>
              <p className="mt-3 text-neutral-700 max-w-2xl">
                Best value options—perfect for trying new scents, gifting, or staying stocked up.
                (Shop-only for now: order via email or DM.)
              </p>
            </div>

            
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
              <p className="text-xs tracking-luxe uppercase text-brand-sage">New Customer</p>
              <p className="mt-2 text-sm text-neutral-700">
                <b>15% OFF + FREE SHIPPING</b> on orders <b>$35+</b>.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <span className="inline-flex items-center rounded-full bg-brand-lime text-brand-ink px-4 py-2 text-xs font-semibold">
                  Code: FIRSTGLOW
                </span>
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="text-sm underline underline-offset-4 text-neutral-700 hover:text-brand-ink"
                >
                  Get the code
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            
            <div className="grid gap-4">
              <p className="text-xs tracking-luxe uppercase text-brand-sage">
                Bundle Deals (Best Value)
              </p>
              {offers.bundles.map((o) => (
                <OfferCard
                  key={o.name}
                  {...o}
                  featured={o.name === "Glow Collection"}
                />
              ))}
            </div>

            
            <div className="grid gap-4">
              <p className="text-xs tracking-luxe uppercase text-brand-sage">
                Gift Sets
              </p>
              {offers.giftSets.map((o) => (
                <OfferCard key={o.name} {...o} />
              ))}

              
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold text-brand-ink">Gifting made easy</p>
                <p className="mt-2 text-sm text-neutral-700">
                  Add a gift set and we’ll package it beautifully—perfect for birthdays,
                  self-care, and special moments.
                </p>
              </div>
            </div>

            
            <div className="grid gap-4">
              <p className="text-xs tracking-luxe uppercase text-brand-sage">
                Subscription (Save the Most)
              </p>
              {offers.subscription.map((o, idx) => (
                <OfferCard key={idx} {...o} />
              ))}

              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold text-brand-ink">Monthly Soap Club</p>
                <ul className="mt-3 text-sm text-neutral-700 space-y-2">
                  <li>✅ Free shipping always</li>
                  <li>✅ Cancel anytime</li>
                  <li>✅ Customize your scents each month</li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:Ladyjo3000@gmail.com?subject=Subscription%20Interest%3A%20Monthly%20Soap%20Club&body=Hi%20Soap%20Glow%20%26%20Beauty%20Bar%2C%0A%0AI%27m%20interested%20in%20the%20Monthly%20Soap%20Club.%20Please%20share%20next%20steps%20and%20options.%0A%0AName%3A%0APhone%3A%0APreferred%20plan%20(1%2F2%2F4)%3A%0A"
                    className="px-6 py-3 rounded-full bg-brand-lime text-brand-ink font-semibold hover:opacity-90 transition text-center"
                  >
                    Start Subscription (Email)
                  </a>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full border border-neutral-300 hover:border-brand-sage transition text-center"
                  >
                    DM to Join
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* OFFERS (informational, no cards) */}
      <section className="px-4 sm:px-6 lg:px-10 py-16 bg-gradient-to-b from-brand-stone via-brand-stone to-white">
        <div className="max-w-6xl mx-auto">
          {/* Header + CTA */}
          <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-soft">
            <div className="relative bg-brand-ink">
              {/* subtle glow accents */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-lime/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-sage/25 blur-3xl" />

              <div className="relative p-6 sm:p-8">
                <p className="text-xs tracking-luxe uppercase text-white/75">
                  Deals & Subscriptions
                </p>
                <h2 className="font-display text-4xl sm:text-5xl text-white mt-2">
                  Save more with bundles, gift sets, and monthly plans
                </h2>
                <p className="mt-3 text-white/85 max-w-3xl">
                  Shop-only for now—click the button to email us what you want and we’ll confirm totals,
                  shipping, and next steps.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <div className="text-sm text-white/85">
                    ✨ New customer: <b className="text-white">15% OFF + FREE SHIPPING</b> on $35+ with code{" "}
                    <span className="inline-flex items-center rounded-full bg-brand-lime text-brand-ink px-3 py-1 text-xs font-semibold ml-1">
                      FIRSTGLOW
                    </span>
                  </div>

                  <a
                    href="mailto:Ladyjo3000@gmail.com?subject=Offer%20Request%20-%20Bundles%2FGifts%2FSubscription&body=Hi%20Soap%20Glow%20%26%20Beauty%20Bar%2C%0A%0AI%27d%20like%20to%20take%20advantage%20of%20an%20offer.%20Here%27s%20what%20I%20want%3A%0A%0AOffer%20type%20(Bundle%2FGift%20Set%2FSubscription)%3A%0ASelection(s)%3A%0AQuantity%3A%0AName%3A%0APhone%3A%0AShipping%20Address%3A%0A%0AThank%20you!%0A"
                    className="px-6 py-3 rounded-full bg-brand-lime text-brand-ink font-semibold hover:opacity-90 transition text-center"
                  >
                    Email to Claim an Offer
                  </a>
                </div>
              </div>
            </div>

            {/* Offer lists */}
            <div className="bg-white">
              <div className="grid lg:grid-cols-3">
                {/* Bundles */}
                <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-neutral-200">
                  <p className="text-xs tracking-luxe uppercase text-brand-sage">Bundle Deals</p>
                  <h3 className="font-display text-2xl text-brand-ink mt-2">Best value bundles</h3>
                  <p className="mt-2 text-sm text-neutral-700">
                    Mix and match bars for the best per-bar pricing.
                  </p>

                  <div className="mt-5 rounded-2xl bg-brand-ink p-5">
                    <OfferLine label="Try 3 Bundle — any 3 bars" price="24" compareAt="27" savings="3" />
                    <OfferLine label="Glow Collection — any 5 bars" price="40" compareAt="45" savings="5" />
                    <OfferLine label="Stock Up — any 10 bars" price="75" compareAt="90" savings="15" />
                  </div>

                  <p className="mt-4 text-xs text-neutral-600">
                    Tip: If you’re new, the <b>Glow Collection</b> is the easiest way to try favorites.
                  </p>
                </div>

                {/* Gift Sets */}
                <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-neutral-200">
                  <p className="text-xs tracking-luxe uppercase text-brand-sage">Gift Sets</p>
                  <h3 className="font-display text-2xl text-brand-ink mt-2">Ready-to-gift</h3>
                  <p className="mt-2 text-sm text-neutral-700">
                    Beautiful packaging + premium selection—perfect for any occasion.
                  </p>

                  <div className="mt-5 rounded-2xl bg-neutral-50 border border-neutral-200 p-5">
                    <div className="flex items-start justify-between gap-4 py-3 border-b border-neutral-200">
                      <div>
                        <p className="text-sm font-semibold text-brand-ink">Glow Gift Box</p>
                        <p className="text-xs text-neutral-600">3 bars + gift packaging</p>
                      </div>
                      <p className="text-sm font-semibold text-brand-ink">$30</p>
                    </div>

                    <div className="flex items-start justify-between gap-4 py-3 border-b border-neutral-200">
                      <div>
                        <p className="text-sm font-semibold text-brand-ink">Self-Care Set</p>
                        <p className="text-xs text-neutral-600">5 bars + gift box</p>
                      </div>
                      <p className="text-sm font-semibold text-brand-ink">$45</p>
                    </div>

                    <div className="flex items-start justify-between gap-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-brand-ink">Ultimate Spa Collection</p>
                        <p className="text-xs text-neutral-600">8 bars + premium gift box</p>
                      </div>
                      <p className="text-sm font-semibold text-brand-ink">$70</p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-neutral-600">
                    Want it customized? Email your scent preferences and we’ll help you choose.
                  </p>
                </div>

                {/* Subscription */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs tracking-luxe uppercase text-brand-sage">Subscription</p>
                  <h3 className="font-display text-2xl text-brand-ink mt-2">Monthly Soap Club</h3>
                  <p className="mt-2 text-sm text-neutral-700">
                    Save the most with monthly deliveries—free shipping always.
                  </p>

                  <div className="mt-5 rounded-2xl bg-brand-ink p-5">
                    <OfferLine label="1 bar/month" price="7.50" note="per bar" />
                    <OfferLine label="2 bars/month" price="14" note="($7/bar)" />
                    <OfferLine label="4 bars/month" price="27" note="($6.75/bar)" />
                  </div>

                  <ul className="mt-4 text-sm text-neutral-700 space-y-2">
                    <li>✅ Free shipping always</li>
                    <li>✅ Cancel anytime</li>
                    <li>✅ Customize scents each month</li>
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-6 sm:px-8 py-6 border-t border-neutral-200 bg-white flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="text-sm text-neutral-700">
                  Ready to claim a deal? Email us what you want and we’ll confirm everything within 48 hours.
                </p>

                <a
                  href="mailto:Ladyjo3000@gmail.com?subject=Offer%20Request%20-%20Bundles%2FGifts%2FSubscription&body=Hi%20Soap%20Glow%20%26%20Beauty%20Bar%2C%0A%0AI%27d%20like%20to%20take%20advantage%20of%20an%20offer.%20Here%27s%20what%20I%20want%3A%0A%0AOffer%20type%20(Bundle%2FGift%20Set%2FSubscription)%3A%0ASelection(s)%3A%0AQuantity%3A%0AName%3A%0APhone%3A%0AShipping%20Address%3A%0A%0AThank%20you!%0A"
                  className="px-6 py-3 rounded-full bg-brand-lime text-brand-ink font-semibold hover:opacity-90 transition text-center"
                >
                  Email to Claim an Offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <div id="signup">
        <EmailSignup />
      </div>
    </div>
  );
}