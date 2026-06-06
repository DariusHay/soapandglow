import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { instagramUrl } from "../utils/orderLinks";
import flyerImg from "../assets/soapglower.PNG";
import heroImg from "../assets/hero.jpg";

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="bg-white">
      <SEO
        title="Soap Glow & Beauty Bar | Organic Soap Orlando, FL"
        description="Shop handcrafted organic soap in Orlando, FL from Soap Glow & Beauty Bar. Faith-driven, handmade soap bars made with nourishing ingredients for everyday glow."
      />

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
            Faith-driven • Organic • Handmade • Orlando, FL
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
                💰 Single Bars <b className="text-white">Starting at $10</b>
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

    </div>
  );
}
