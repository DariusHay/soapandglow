export function buildOrderEmail(productName) {
  const to = "soapglowandbeautybar@gmail.com";
  const subject = encodeURIComponent(`Order Request: ${productName}`);
  const body = encodeURIComponent(
    `Hi Soap Glow & Beauty Bar,

I’d like to order:
- ${productName}

My name:
Shipping address:
Phone number:
Quantity:

Thank you!
`
  );

  return `mailto:${to}?subject=${subject}&body=${body}`;
}

export const instagramUrl = "https://www.instagram.com/soapglowandbeautybar";

export const googleReviewsUrl =
  "https://www.google.com/search?sca_esv=0af47fe24a20a796&rlz=1C5OZZY_enUS1127US1127&sxsrf=ANbL-n7PHmQwTZ2rNJLXvxAEePPqsgXRkA:1781056640801&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOaKnLhQkex-oWA561_H8EpzyEiLHPKNLvF-A9GN6GPnRly9gfjWrVA7IsE6XgEC4j3pyvIbuW9yCprhUj5bu6B1LkiKak5uJ8lmQfs2WNLBrp4CGlA%3D%3D&q=SoapGlowandBeautyBar+Reviews&sa=X&ved=2ahUKEwjxh5mDyfuUAxVqTDABHYe3FSsQ0bkNegQIHRAD&biw=1474&bih=749&dpr=2";
