const tropicalCitrusImage = import.meta.env.BASE_URL + 'images/tropical-citrus.png';
const nagChampaMudImage = import.meta.env.BASE_URL + 'images/mug.png';
const oatmealMilkHoneyImage = import.meta.env.BASE_URL + 'images/oatmeal-milk-honey.png';
const turmericHoneyImage = import.meta.env.BASE_URL + 'images/turmeric-honey.png';
const orangeSweetMustImage = import.meta.env.BASE_URL + 'images/orange-sweet-must.png';
const pumpkinSpiceImage = import.meta.env.BASE_URL + 'images/pumpkin-spice.png';
const alwaysAMoorImage = import.meta.env.BASE_URL + 'images/always-a-moor.png';
const appleRoseImage = import.meta.env.BASE_URL + 'images/apple-rose.png';
const blueSeaGoatMilkImage = import.meta.env.BASE_URL + 'images/blue-sea-goat-milk.png';
const islandCitrusImage = import.meta.env.BASE_URL + 'images/island-citrus.png';
const dragonBloodImage = import.meta.env.BASE_URL + 'images/dragon-blood.png';
const citrusSplashGoatMilkImage = import.meta.env.BASE_URL + 'images/citrus-splash-goat-milk.png';
const frenchPearImage = import.meta.env.BASE_URL + 'images/french-pear.png';
const wakameImage = import.meta.env.BASE_URL + 'images/wakame.png';
const lavenderMintImage = import.meta.env.BASE_URL + 'images/lavender-mint.png';
const deadSeaMudImage = import.meta.env.BASE_URL + 'images/dead-sea-mud.png';
const charcoalAloeImage = import.meta.env.BASE_URL + 'images/charcoal-aloe.png';
const seaJasmineLimeImage = import.meta.env.BASE_URL + 'images/sea-jasmine-lime.png';
const pinkLemonadeImage = import.meta.env.BASE_URL + 'images/pink-lemonade.png';
const mangoSalsaImage = import.meta.env.BASE_URL + 'images/mango-salsa.png';
const sweetAlmondGreekYogurtImage = import.meta.env.BASE_URL + 'images/sweet-almond-greek-yogurt.png';
const cedarwoodTeaTreeImage = import.meta.env.BASE_URL + 'images/cedarwood-tea-tree.png';
const peachImage = import.meta.env.BASE_URL + 'images/peach.png';
const raspberryPatchouliImage = import.meta.env.BASE_URL + 'images/raspberry-patchouli.png';
const bananaCoconutScrubImage = import.meta.env.BASE_URL + 'images/banana-coconut-scrub.png';
const bayberryCitrusImage = import.meta.env.BASE_URL + 'images/bayberry-citrus.png';
const cottonFieldsImage = import.meta.env.BASE_URL + 'images/cotton-fields.png';
const moroccanVanillaGoatMilkImage = import.meta.env.BASE_URL + 'images/moroccan-vanilla-goat-milk.png';
const milkCollagenImage = import.meta.env.BASE_URL + 'images/milk-collagen.png';

export const products = [
  {
    id: "tropical-citrus",
    slug: "tropical-citrus",
    name: "Tropical Citrus",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: true,
    shortDescription: "Brightening, refreshing, uplifting.",
    description:
      "Uplifting citrus blend energizes and refreshes the skin while helping brighten and even skin tone.",
    benefits: [
      "Energizes and refreshes skin",
      "Helps brighten and even tone",
      "Protects against environmental stressors",
    ],
    image: tropicalCitrusImage,
  },
  {
    id: "nag-champa-mud",
    slug: "nag-champa-mud",
    name: "Nag Champa Mud",
    collection: "Signature Collection",
    category: "Signature Collection",
    price: 12,
    featured: true,
    shortDescription: "Detoxifying, grounding, spa-like.",
    description:
      "Mineral-rich mud draws out impurities while Nag Champa helps create a calming ritual experience.",
    benefits: [
      "Draws out impurities and toxins",
      "Helps unclog pores",
      "Creates a spa-like ritual experience",
    ],
    image: nagChampaMudImage,
  },
  {
    id: "oatmeal-milk-honey",
    slug: "oatmeal-milk-honey",
    name: "Oatmeal Milk & Honey",
    collection: "Signature Collection",
    category: "Signature Collection",
    price: 12,
    featured: true,
    shortDescription: "Gentle, soothing, deeply moisturizing.",
    description:
      "A comforting bar for dry, irritated, and sensitive skin with oatmeal, honey, and goat milk support.",
    benefits: [
      "Soothes dry and sensitive skin",
      "Deeply moisturizing",
      "Gentle enough for eczema-prone skin",
    ],
    image: oatmealMilkHoneyImage,
  },
  {
    id: "turmeric-honey",
    slug: "turmeric-honey",
    name: "Turmeric Honey",
    collection: "Signature Collection",
    category: "Signature Collection",
    price: 12,
    featured: true,
    shortDescription: "Brightening, calming, radiant.",
    description:
      "Turmeric and honey work together to calm inflammation, support moisture, and encourage glowing skin.",
    benefits: [
      "Helps calm inflammation",
      "Brightens dull complexion",
      "Supports radiant-looking skin",
    ],
    image: turmericHoneyImage,
  },
  {
    id: "orange-sweet-musk",
    slug: "orange-sweet-musk",
    name: "Orange Sweet Musk",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Brightening, revitalizing, cheerful.",
    description:
      "Sweet orange oil and vitamin C support brighter-looking skin and a smooth finish.",
    benefits: [
      "Brightens tired skin",
      "Supports collagen production",
      "Gently exfoliates",
    ],
    image: orangeSweetMustImage,
  },
  {
    id: "pumpkin-spice",
    slug: "pumpkin-spice",
    name: "Pumpkin Spice",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Nourishing, warming, smoothing.",
    description:
      "Pumpkin enzymes and warming spice help smooth rough patches and support a healthy glow.",
    benefits: [
      "Gentle natural exfoliation",
      "Nourishes and repairs skin",
      "Softens rough dry patches",
    ],
    image: pumpkinSpiceImage,
  },
  {
    id: "always-a-moor",
    slug: "always-a-moor",
    name: "Always a Moor",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Detoxifying, hydrating, grounding.",
    description:
      "Ancient moor mud helps purify clogged pores while replenishing tired skin.",
    benefits: [
      "Deeply detoxifies pores",
      "Retains moisture",
      "Refines skin texture",
    ],
    image: alwaysAMoorImage,
  },
  {
    id: "apple-rose",
    slug: "apple-rose",
    name: "Apple Rose",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Softening, toning, radiant.",
    description:
      "Apple extract and rose hydrosol help brighten, tone, and soften sensitive skin.",
    benefits: [
      "Gentle exfoliation",
      "Soothes sensitive skin",
      "Minimizes appearance of pores",
    ],
    image: appleRoseImage,
  },
  {
    id: "blue-sea-goat-milk",
    slug: "blue-sea-goat-milk",
    name: "Blue Sea Goat Milk",
    collection: "Signature Collection",
    category: "Signature Collection",
    price: 12,
    featured: false,
    shortDescription: "Creamy, renewing, moisture-rich.",
    description:
      "Goat milk and sea minerals help gently exfoliate while deeply moisturizing the skin.",
    benefits: [
      "Gently renews skin cells",
      "Deeply moisturizes",
      "Strengthens moisture barrier",
    ],
    image: blueSeaGoatMilkImage,
  },
  {
    id: "island-citrus",
    slug: "island-citrus",
    name: "Island Citrus",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Fresh, cleansing, energizing.",
    description:
      "A men’s classic with citrus freshness and deep-cleansing support.",
    benefits: [
      "Removes excess oil",
      "Tightens pores",
      "Defends against environmental stress",
    ],
    image: islandCitrusImage,
  },
  {
    id: "dragon-blood",
    slug: "dragon-blood",
    name: "Dragon Blood",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Protective, soothing, exotic.",
    description:
      "A rich antioxidant bar designed to soothe reactive skin and support regeneration.",
    benefits: [
      "Helps calm irritated skin",
      "Supports regeneration",
      "Protects against damage",
    ],
    image: dragonBloodImage,
  },
  {
    id: "citrus-splash-goat-milk",
    slug: "citrus-splash-goat-milk",
    name: "Citrus Splash Goat Milk",
    collection: "Signature Collection",
    category: "Signature Collection",
    price: 12,
    featured: false,
    shortDescription: "Creamy, brightening, nourishing.",
    description:
      "Goat milk and citrus oils help moisturize, brighten, and gently exfoliate.",
    benefits: [
      "Deeply nourishes skin",
      "Brightens dull skin",
      "Leaves skin conditioned",
    ],
    image: citrusSplashGoatMilkImage,
  },
  {
    id: "french-pear",
    slug: "french-pear",
    name: "French Pear",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Elegant, softening, balanced.",
    description:
      "Pear extract and natural sugars help soften, brighten, and hydrate skin.",
    benefits: [
      "Softens and brightens",
      "Hydrates dry skin",
      "Suitable for sensitive skin",
    ],
    image: frenchPearImage,
  },
  {
    id: "wakame",
    slug: "wakame",
    name: "Wakame",
    collection: "Signature Collection",
    category: "Signature Collection",
    price: 12,
    featured: false,
    shortDescription: "Firming, hydrating, marine-fresh.",
    description:
      "Seaweed-rich bar that helps support skin elasticity and smooth texture.",
    benefits: [
      "Helps improve elasticity",
      "Deeply hydrates",
      "Combats free radicals",
    ],
    image: wakameImage,
  },
  {
    id: "lavender-mint",
    slug: "lavender-mint",
    name: "Lavender Mint",
    collection: "Signature Collection",
    category: "Signature Collection",
    price: 12,
    featured: false,
    shortDescription: "Cooling, soothing, clarifying.",
    description:
      "Lavender and peppermint create a calming yet invigorating cleansing experience.",
    benefits: [
      "Balances stressed skin",
      "Cooling sensation",
      "Helps keep skin clean",
    ],
    image: lavenderMintImage,
  },
  {
    id: "dead-sea-mud",
    slug: "dead-sea-mud",
    name: "Dead Sea Mud",
    collection: "Signature Collection",
    category: "Signature Collection",
    price: 12,
    featured: true,
    shortDescription: "Mineral-rich, detoxifying, smoothing.",
    description:
      "Authentic Dead Sea minerals help detoxify, purify, and soften skin.",
    benefits: [
      "Deeply detoxifies skin",
      "Reduces inflammation and redness",
      "Leaves skin soft and refreshed",
    ],
    image: deadSeaMudImage,
  },
  {
    id: "charcoal-aloe",
    slug: "charcoal-aloe",
    name: "Charcoal Aloe",
    collection: "Signature Collection",
    category: "Signature Collection",
    price: 12,
    featured: true,
    shortDescription: "Deep cleansing, soothing, balancing.",
    description:
      "Activated charcoal and aloe help draw out toxins while calming and rehydrating skin.",
    benefits: [
      "Deeply unclogs pores",
      "Soothes and rehydrates",
      "Ideal for oily or acne-prone skin",
    ],
    image: charcoalAloeImage,
  },
  {
    id: "sea-jasmine-lime",
    slug: "sea-jasmine-lime",
    name: "Sea Jasmine Lime",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Floral-citrus, brightening, refreshing.",
    description:
      "A sea-inspired blend that softens, brightens, and refreshes tired skin.",
    benefits: [
      "Moisturizes and softens",
      "Gently exfoliates dull skin",
      "Refreshes stressed skin",
    ],
    image: seaJasmineLimeImage,
  },
  {
    id: "pink-lemonade",
    slug: "pink-lemonade",
    name: "Pink Lemonade",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Fresh glow, brightening, cheerful.",
    description:
      "Vitamin C-rich lemon-inspired bar that helps brighten and refresh.",
    benefits: [
      "Brightens and evens tone",
      "Gentle exfoliation",
      "Suitable for all skin types",
    ],
    image: pinkLemonadeImage,
  },
  {
    id: "mango-salsa",
    slug: "mango-salsa",
    name: "Mango Salsa",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Moisturizing, tropical, softening.",
    description:
      "Mango butter and fruit enzymes help restore dry skin and support a healthy glow.",
    benefits: [
      "Deeply moisturizes",
      "Gently renews skin surface",
      "Softens rough patches",
    ],
    image: mangoSalsaImage,
  },
  {
    id: "sweet-almond-greek-yogurt",
    slug: "sweet-almond-greek-yogurt",
    name: "Sweet Almond Greek Yogurt",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Creamy, conditioning, silky.",
    description:
      "Greek yogurt and almond oil help smooth, soften, and support the skin barrier.",
    benefits: [
      "Gently exfoliates",
      "Deeply conditions skin",
      "Supports healthy skin barrier",
    ],
    image: sweetAlmondGreekYogurtImage,
  },
  {
    id: "cedarwood-tea-tree",
    slug: "cedarwood-tea-tree",
    name: "Cedarwood Tea Tree",
    collection: "Signature Collection",
    category: "Signature Collection",
    price: 12,
    featured: true,
    shortDescription: "Clarifying, antimicrobial, grounding.",
    description:
      "Tea tree and cedarwood help fight blemish-causing buildup while balancing oily skin.",
    benefits: [
      "Helps fight acne-causing bacteria",
      "Regulates excess sebum",
      "Purifies pores without over-drying",
    ],
    image: cedarwoodTeaTreeImage,
  },
  {
    id: "peach",
    slug: "peach",
    name: "Peach",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Juicy, hydrating, brightening.",
    description:
      "A fruit-forward bar that helps soften, hydrate, and revitalize dull skin.",
    benefits: [
      "Nourishes and revitalizes",
      "Brightens dull complexions",
      "Softens rough skin",
    ],
    image: peachImage,
  },
  {
    id: "raspberry-patchouli",
    slug: "raspberry-patchouli",
    name: "Raspberry Patchouli",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Antioxidant-rich, sensual, balancing.",
    description:
      "Raspberry and patchouli combine for defense, calming support, and a rich earthy-fruity scent.",
    benefits: [
      "Rich in antioxidants",
      "Helps soothe redness",
      "Tightens pores and reduces shine",
    ],
    image: raspberryPatchouliImage,
  },
  {
    id: "banana-coconut-scrub",
    slug: "banana-coconut-scrub",
    name: "Banana Coconut Scrub",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Scrubbing, tropical, deeply hydrating.",
    description:
      "Banana and coconut help buff away dead skin while delivering rich moisture.",
    benefits: [
      "Deeply hydrates skin",
      "Buffs away dead skin",
      "Ideal for dry cracked areas",
    ],
    image: bananaCoconutScrubImage,
  },
  {
    id: "bayberry-citrus",
    slug: "bayberry-citrus",
    name: "Bayberry Citrus",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Toning, brightening, invigorating.",
    description:
      "A fresh citrus blend that tones, energizes, and gently deep-cleanses.",
    benefits: [
      "Tones and tightens skin",
      "Brightens complexion",
      "Removes impurities gently",
    ],
    image: bayberryCitrusImage,
  },
  {
    id: "cotton-fields",
    slug: "cotton-fields",
    name: "Cotton Fields",
    collection: "Classic Collection",
    category: "Classic Collection",
    price: 10,
    featured: false,
    shortDescription: "Clean, gentle, everyday fresh.",
    description:
      "A soft everyday bar with a clean scent and gentle formula for the whole family.",
    benefits: [
      "Ultra-clean fresh feeling",
      "Ideal for sensitive skin",
      "Preserves natural oils",
    ],
    image: cottonFieldsImage,
  },
  {
    id: "moroccan-vanilla-goat-milk",
    slug: "moroccan-vanilla-goat-milk",
    name: "Moroccan Vanilla Goat Milk",
    collection: "Signature Collection",
    category: "Signature Collection",
    price: 12,
    featured: false,
    shortDescription: "Luxurious, nourishing, radiant.",
    description:
      "Goat milk and vanilla support soft, radiant skin with a warm indulgent fragrance.",
    benefits: [
      "Deeply nourishes dry skin",
      "Gently exfoliates",
      "Adds softness and radiance",
    ],
    image: moroccanVanillaGoatMilkImage,
  },
  {
    id: "milk-collagen",
    slug: "milk-collagen",
    name: "Milk & Collagen",
    collection: "Signature Collection",
    category: "Signature Collection",
    price: 12,
    featured: true,
    shortDescription: "Firming, creamy, spa-quality.",
    description:
      "Collagen peptides and milk proteins help support firmness, softness, and a youthful feel.",
    benefits: [
      "Supports skin firmness",
      "Hydrates and softens",
      "Promotes a plumper look",
    ],
    image: milkCollagenImage,
  },
];