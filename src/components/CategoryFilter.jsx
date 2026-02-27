export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => {
        const isActive = c === active;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={[
              "px-4 py-2 rounded-full text-sm transition",
              isActive
                ? "bg-neutral-900 text-white"
                : "bg-white border border-neutral-200 text-neutral-800 hover:border-neutral-400",
            ].join(" ")}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}