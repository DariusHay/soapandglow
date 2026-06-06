import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/useCart";

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
  const { itemCount } = useCart();

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
          <NavLink to="/cart" className={navClass}>Cart</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-sm font-semibold text-brand-ink transition hover:border-brand-sage"
            aria-label={`Cart with ${itemCount} item${itemCount === 1 ? "" : "s"}`}
          >
            Bag
            {itemCount ? (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-lime px-1 text-[11px] text-brand-ink">
                {itemCount}
              </span>
            ) : null}
          </Link>

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
          <div
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-5"
            onClick={() => setOpen(false)}
          >
            <div className="grid gap-3">
              <NavLink to="/" className={navClass}>Home</NavLink>
              <NavLink to="/shop" className={navClass}>Shop</NavLink>
              <NavLink to="/about" className={navClass}>About</NavLink>
              <NavLink to="/testimonials" className={navClass}>Reviews</NavLink>
              <NavLink to="/contact" className={navClass}>Contact</NavLink>
              <NavLink to="/cart" className={navClass}>Cart ({itemCount})</NavLink>
            </div>

            <div className="mt-5 grid gap-3">
              <Link
                to="/shop"
                className="px-6 py-3 rounded-full bg-brand-lime text-brand-ink font-semibold hover:opacity-90 transition text-center"
              >
                Shop Now
              </Link>

              <Link
                to="/cart"
                className="px-6 py-3 rounded-full border border-neutral-300 hover:border-brand-sage transition text-center"
              >
                View Cart
              </Link>
            </div>

            <p className="mt-4 text-xs text-neutral-500">
              Secure checkout powered by Square
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
