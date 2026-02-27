import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function BrandWordmark() {
  return (
    <Link to="/" className="inline-flex items-baseline gap-2">
      <span className="font-display text-2xl sm:text-3xl text-brand-ink">Soap</span>
      <span className="font-display text-2xl sm:text-3xl text-brand-lime">Glow</span>
      <span className="hidden sm:inline text-xs tracking-luxe uppercase text-brand-sage ml-2">
        Beauty Bar
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
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <BrandWordmark />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/shop" className={navClass}>Shop</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/testimonials" className={navClass}>Reviews</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link
            to="/shop"
            className="hidden sm:inline-flex px-5 py-2 rounded-full bg-brand-lime text-brand-ink font-medium hover:opacity-90 transition"
          >
            Shop Now
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 hover:border-neutral-400 transition"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="sr-only">Open menu</span>
            <div className="grid gap-1">
              <span className={`block h-0.5 w-5 bg-neutral-800 transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-neutral-800 transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-neutral-800 transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open ? (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-5">
            <div className="grid gap-3">
              <NavLink to="/" className={navClass}>Home</NavLink>
              <NavLink to="/shop" className={navClass}>Shop</NavLink>
              <NavLink to="/about" className={navClass}>About</NavLink>
              <NavLink to="/testimonials" className={navClass}>Reviews</NavLink>
              <NavLink to="/contact" className={navClass}>Contact</NavLink>
            </div>

            <div className="mt-5 grid gap-3">
              <Link
                to="/shop"
                className="px-6 py-3 rounded-full bg-brand-lime text-brand-ink font-semibold hover:opacity-90 transition text-center"
              >
                Shop Now
              </Link>

              <a
                href="mailto:Ladyjo3000@gmail.com?subject=Order%20Request%20-%20Soap%20Glow%20%26%20Beauty%20Bar"
                className="px-6 py-3 rounded-full border border-neutral-300 hover:border-brand-sage transition text-center"
              >
                Order via Email
              </a>
            </div>

            <p className="mt-4 text-xs text-neutral-500">
              FREE shipping on $50+ • Code: <span className="font-semibold text-brand-plum">FIRSTGLOW</span>
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}