import { useMemo, useState } from "react";
import SEO from "../components/SEO";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import { products } from "../data/products";
import { categories } from "../data/categories";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-neutral-50">
      <SEO
        title="Shop | Soap Glow & Beauty Bar"
        description="Explore handcrafted organic soaps—shop bestsellers, bundles, and glow-ready essentials."
      />

      <section className="px-4 sm:px-6 lg:px-10 pt-10 pb-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-luxe uppercase text-brand-sage">Shop</p>
          <h1 className="font-display text-4xl sm:text-5xl text-brand-ink mt-2">
            Handcrafted soaps for every glow
          </h1>
          <p className="mt-3 text-neutral-700 max-w-2xl">
            Shop-only for now: choose your items, then order via email or DM on Instagram
            from the product page.
          </p>

          <div className="mt-6">
            <CategoryFilter
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pb-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}