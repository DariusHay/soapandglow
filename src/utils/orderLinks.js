export function buildOrderEmail(productName) {
  const to = "Ladyjo3000@gmail.com";
  const subject = encodeURIComponent(`Order Request: ${productName}`);
  const body = encodeURIComponent(
    `Hi Soap Glow & Beauty Bar,\n\nI’d like to order:\n- ${productName}\n\nMy name:\nShipping address:\nPhone number:\nQuantity:\n\nThank you!\n`
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

export const instagramUrl = "https://instagram.com/SoapGlowBeautyBar";