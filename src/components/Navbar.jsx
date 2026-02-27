import { Link, NavLink } from "react-router-dom";

function BrandWordmark() {
  return (
    <Link to="/" className="inline-flex items-baseline gap-2">
      <span className="font-display text-2xl sm:text-3xl text-brand-ink">
        Soap
      </span>
      <span className="font-display text-2xl sm:text-3xl text-brand-lime">
        Glow
      </span>
      <span className="hidden sm:inline text-xs tracking-luxe uppercase text-brand-purple ml-2">
        & Beauty Bar
      </span>
    </Link>
  );
}

const navClass = ({ isActive }) =>
  [
    "text-sm transition",
    isActive ? "text-brand-ink" : "text-neutral-700 hover:text-brand-ink",
  ].join(" ");

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <BrandWordmark />

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/shop" className={navClass}>Shop</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/testimonials" className={navClass}>Reviews</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/shop"
            className="px-5 py-2 rounded-full bg-brand-lime text-brand-ink font-medium hover:opacity-90 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}