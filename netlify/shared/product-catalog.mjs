export const productCatalog = [
  { slug: "tropical-citrus", name: "Tropical Citrus", priceCents: 1000, collection: "Classic Collection" },
  { slug: "nag-champa-mud", name: "Nag Champa Mud", priceCents: 1200, collection: "Signature Collection" },
  { slug: "oatmeal-milk-honey", name: "Oatmeal Milk & Honey", priceCents: 1200, collection: "Signature Collection" },
  { slug: "turmeric-honey", name: "Turmeric Honey", priceCents: 1200, collection: "Signature Collection" },
  { slug: "orange-sweet-musk", name: "Orange Sweet Musk", priceCents: 1000, collection: "Classic Collection" },
  { slug: "pumpkin-spice", name: "Pumpkin Spice", priceCents: 1000 },
  { slug: "always-a-moor", name: "Always a Moor", priceCents: 1000 },
  { slug: "apple-rose", name: "Apple Rose", priceCents: 1000 },
  { slug: "blue-sea-goat-milk", name: "Blue Sea Goat Milk", priceCents: 1200 },
  { slug: "island-citrus", name: "Island Citrus", priceCents: 1000 },
  { slug: "dragon-blood", name: "Dragon Blood", priceCents: 1000 },
  { slug: "citrus-splash-goat-milk", name: "Citrus Splash Goat Milk", priceCents: 1200 },
  { slug: "french-pear", name: "French Pear", priceCents: 1000 },
  { slug: "wakame", name: "Wakame", priceCents: 1200 },
  { slug: "lavender-mint", name: "Lavender Mint", priceCents: 1200 },
  { slug: "dead-sea-mud", name: "Dead Sea Mud", priceCents: 1200 },
  { slug: "charcoal-aloe", name: "Charcoal Aloe", priceCents: 1200 },
  { slug: "sea-jasmine-lime", name: "Sea Jasmine Lime", priceCents: 1000 },
  { slug: "pink-lemonade", name: "Pink Lemonade", priceCents: 1000 },
  { slug: "mango-salsa", name: "Mango Salsa", priceCents: 1000 },
  { slug: "sweet-almond-greek-yogurt", name: "Sweet Almond Greek Yogurt", priceCents: 1000 },
  { slug: "cedarwood-tea-tree", name: "Cedarwood Tea Tree", priceCents: 1200 },
  { slug: "peach", name: "Peach", priceCents: 1000 },
  { slug: "raspberry-patchouli", name: "Raspberry Patchouli", priceCents: 1000 },
  { slug: "banana-coconut-scrub", name: "Banana Coconut Scrub", priceCents: 1000 },
  { slug: "bayberry-citrus", name: "Bayberry Citrus", priceCents: 1000 },
  { slug: "cotton-fields", name: "Cotton Fields", priceCents: 1000 },
  { slug: "moroccan-vanilla-goat-milk", name: "Moroccan Vanilla Goat Milk", priceCents: 1200 },
  { slug: "milk-collagen", name: "Milk & Collagen", priceCents: 1200 },
  { slug: "tea-tree-mint", name: "Tea Tree Mint", priceCents: 1000, collection: "Classic Collection" },
  { slug: "desert-sage", name: "Desert Sage", priceCents: 1000, collection: "Classic Collection" },
];

export function findProduct(slug) {
  const product = productCatalog.find((entry) => entry.slug === slug);
  if (!product) return undefined;

  return {
    ...product,
    collection:
      product.collection ||
      (product.priceCents === 1000
        ? "Classic Collection"
        : "Signature Collection"),
  };
}
