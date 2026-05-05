import { Link } from "react-router-dom";
import { instagramUrl } from "../utils/orderLinks";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-brand-ink">
            Soap <span className="text-brand-lime">Glow</span>
          </p>
          <p className="mt-3 text-sm text-neutral-700 max-w-md">
            Handcrafted organic soap in Orlando, FL.
          </p>

          <div className="mt-5 text-sm text-neutral-700 space-y-1">
            <p>
              Email:{" "}
              <a
                className="underline underline-offset-4 hover:text-brand-ink"
                href="mailto:soapglowandbeautybar@gmail.com"
              >
                soapglowandbeautybar@gmail.com
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a
                className="underline underline-offset-4 hover:text-brand-ink"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                @soapglowandbeautybar
              </a>
            </p>
            <p>Phone:{" "}<a href="tel:3219393483">321-939-3483</a></p>
            <p className="mt-3 text-xs text-neutral-500">
              Allergy note: Always review ingredients. Discontinue use if irritation occurs.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-luxe uppercase text-brand-sage">
            Shop Info
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="text-neutral-700">✨ FIRSTGLOW: 10% off for first time customers</li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-luxe uppercase text-brand-sage">
            Policies
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:underline underline-offset-4" to="/policies/refunds">Refunds & Returns</Link></li>
            <li><Link className="hover:underline underline-offset-4" to="/policies/shipping">Shipping</Link></li>
            <li><Link className="hover:underline underline-offset-4" to="/policies/privacy">Privacy</Link></li>
            <li><Link className="hover:underline underline-offset-4" to="/policies/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-5 text-xs text-neutral-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Soap Glow & Beauty Bar. All rights reserved.</p>
          <p>Made with purpose • Florida</p>
        </div>
      </div>
    </footer>
  );
}