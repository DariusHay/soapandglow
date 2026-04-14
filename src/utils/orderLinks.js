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