import PolicyLayout from "./PolicyLayout";

export default function RefundsPolicy() {
  return (
    <PolicyLayout title="Refund & Return Policy" effectiveDate="[Insert Date]">
      <p>
        At Soap Glow & Beauty Bar, your satisfaction is our priority. All products are handcrafted
        with organic ingredients and made fresh to order.
      </p>

      <h3>Returns & Refunds</h3>
      <p>We accept returns within 30 days of purchase if:</p>
      <ul>
        <li>Product arrived damaged or defective</li>
        <li>You received the wrong product</li>
        <li>You’re unsatisfied with your purchase</li>
      </ul>

      <h3>To request a return or refund</h3>
      <ul>
        <li>Email us at <a href="mailto:Ladyjo3000@gmail.com">Ladyjo3000@gmail.com</a> with your order number and photos (if damaged)</li>
        <li>We’ll respond within 48 hours with return instructions</li>
      </ul>

      <h3>Refund options</h3>
      <ul>
        <li>Full refund to original payment method</li>
        <li>Store credit for future purchase</li>
        <li>Product replacement</li>
      </ul>

      <h3>Please note</h3>
      <ul>
        <li>Due to the handmade nature of our products, slight variations in color, shape, and scent are normal and not considered defects</li>
        <li>For hygiene reasons, opened or used products can only be refunded if defective</li>
        <li>Custom or personalized orders are final sale unless defective</li>
      </ul>

      <h3>Shipping issues</h3>
      <p>
        If your order is lost or damaged in transit, contact us immediately. We’ll work with you
        to resolve the issue with a replacement or refund.
      </p>

      <h3>Subscription cancellations</h3>
      <p>
        You can pause or cancel your subscription anytime through your account or by emailing us.
        No penalties, no questions asked.
      </p>

      <h3>Questions?</h3>
      <p>Email: <a href="mailto:Ladyjo3000@gmail.com">Ladyjo3000@gmail.com</a></p>
    </PolicyLayout>
  );
}