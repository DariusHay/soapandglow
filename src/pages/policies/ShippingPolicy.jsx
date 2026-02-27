import PolicyLayout from "./PolicyLayout";

export default function ShippingPolicy() {
  return (
    <PolicyLayout title="Shipping Policy" effectiveDate="[Insert Date]">
      <h3>Processing time</h3>
      <p>All soaps are handcrafted to order. Please allow:</p>
      <ul>
        <li>1–3 business days for order processing</li>
        <li>Orders placed Friday–Sunday ship the following Monday</li>
      </ul>

      <h3>Shipping rates</h3>
      <ul>
        <li>Orders under $50: $6 flat-rate shipping</li>
        <li>Orders $50+: FREE SHIPPING</li>
        <li>Subscriptions: FREE SHIPPING always</li>
      </ul>

      <h3>Delivery time</h3>
      <ul>
        <li>Standard shipping: 5–7 business days after processing</li>
        <li>Tracking information will be emailed when your order ships</li>
      </ul>

      <h3>Local pickup (if applicable)</h3>
      <p>
        Free local pickup may be available. Select at checkout and we’ll email when your order is ready.
        (Confirm availability before publishing.)
      </p>

      <h3>International shipping</h3>
      <p>We currently ship within the United States only.</p>

      <h3>Lost or damaged packages</h3>
      <p>
        Contact us at <a href="mailto:Ladyjo3000@gmail.com">Ladyjo3000@gmail.com</a> within 7 days of delivery.
        We’ll help resolve the issue.
      </p>
    </PolicyLayout>
  );
}