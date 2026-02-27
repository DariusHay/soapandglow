export default function EmailSignup() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 bg-white">
      <div className="max-w-6xl mx-auto rounded-3xl border border-neutral-200 p-8 sm:p-10 shadow-soft">
        <p className="text-xs tracking-luxe uppercase text-neutral-600">
          Stay in the loop
        </p>
        <h3 className="font-display text-4xl text-neutral-900 mt-2">
          New drops, exclusive bundles, and early access
        </h3>
        <p className="mt-3 text-neutral-700 max-w-2xl">
          Add your email to get launch announcements and limited releases.
        </p>

        <form className="mt-7 flex flex-col sm:flex-row gap-3 max-w-xl">
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 px-5 py-3 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900"
          />
          <button className="px-7 py-3 rounded-full bg-neutral-900 text-white hover:opacity-90 transition">
            Sign up
          </button>
        </form>

        <p className="mt-3 text-xs text-neutral-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}