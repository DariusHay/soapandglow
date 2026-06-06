const bundlePrices = {
  "Classic Collection": {
    unitPriceCents: 1000,
    bundles: [
      { quantity: 3, priceCents: 2600 },
      { quantity: 5, priceCents: 4400 },
    ],
  },
  "Signature Collection": {
    unitPriceCents: 1200,
    bundles: [
      { quantity: 3, priceCents: 3200 },
      { quantity: 5, priceCents: 5000 },
    ],
  },
};

function calculateCollectionPriceCents(collection, quantity) {
  const pricing = bundlePrices[collection];
  if (!pricing || quantity <= 0) return 0;

  const bestPrices = Array(quantity + 1).fill(Number.POSITIVE_INFINITY);
  bestPrices[0] = 0;

  for (let count = 1; count <= quantity; count += 1) {
    bestPrices[count] = bestPrices[count - 1] + pricing.unitPriceCents;

    for (const bundle of pricing.bundles) {
      if (count >= bundle.quantity) {
        bestPrices[count] = Math.min(
          bestPrices[count],
          bestPrices[count - bundle.quantity] + bundle.priceCents
        );
      }
    }
  }

  return bestPrices[quantity];
}

export function calculateBundleSavingsCents(items) {
  const quantities = items.reduce((totals, item) => {
    const quantity = Number(item.quantity || 0);
    totals[item.collection] = (totals[item.collection] || 0) + quantity;
    return totals;
  }, {});

  return Object.entries(quantities).reduce((totalSavings, [collection, quantity]) => {
    const pricing = bundlePrices[collection];
    if (!pricing) return totalSavings;

    const regularPrice = pricing.unitPriceCents * quantity;
    const bundlePrice = calculateCollectionPriceCents(collection, quantity);
    return totalSavings + regularPrice - bundlePrice;
  }, 0);
}
