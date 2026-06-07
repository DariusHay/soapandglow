import PolicyLayout from "./PolicyLayout";

export default function TermsPolicy() {
  return (
    <PolicyLayout title="Terms of Service" effectiveDate="01/01/2026">
      <p>
        By using our website and purchasing from Soap Glow & Beauty Bar, you agree to these terms.
      </p>

      <h3>Products</h3>
      <ul>
        <li>All products are handmade and may vary slightly in appearance</li>
        <li>Product descriptions and images are as accurate as possible</li>
        <li>We reserve the right to limit quantities or discontinue products</li>
      </ul>

      <h3>Pricing</h3>
      <ul>
        <li>All prices are in USD</li>
        <li>Prices subject to change without notice</li>
        <li>Promotions and discounts cannot be combined unless stated</li>
      </ul>

      <h3>Payment</h3>
      <ul>
        <li>We accept major credit cards and PayPal (when checkout is enabled)</li>
        <li>Payment is processed securely through our payment provider</li>
        <li>You agree to provide accurate payment information</li>
      </ul>

      <h3>Limitation of liability</h3>
      <p>Soap Glow & Beauty Bar is not liable for:</p>
      <ul>
        <li>Allergic reactions (please review ingredients before purchase)</li>
        <li>Indirect or consequential damages</li>
        <li>Issues beyond our reasonable control</li>
      </ul>

      <h3>Governing law</h3>
      <p>These terms are governed by the laws of the State of Florida.</p>

      <h3>Questions?</h3>
      <p>
        Contact: <a href="mailto:soapglowandbeautybar@gmail.com">soapglowandbeautybar@gmail.com</a>
        <br />
        Phone: <a href="tel:3213933483">321-393-3483</a>
      </p>
    </PolicyLayout>
  );
}
