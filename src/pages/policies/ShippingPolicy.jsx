import PolicyLayout from "./PolicyLayout";

export default function ShippingPolicy() {
  return (
    <PolicyLayout title="Shipping Policy" effectiveDate="01/01/2026">
      <h3>Processing time</h3>
      <p>All soaps are handcrafted to order. Please allow:</p>
      <ul>
        <li>1–3 business days for order processing</li>
        <li>Orders placed Friday–Sunday ship the following Monday</li>
      </ul>

      <h3>Shipping rates</h3>
      <ul>
        <li>Shipping fees will apply to all orders.</li>
      </ul>

      <h3>Delivery time</h3>
      <ul>
        <li>Standard shipping: 5–7 business days after processing</li>
        <li>Delivery times may vary by destination and carrier</li>
      </ul>

      <h3>Local pickup (if applicable)</h3>
      <p>
        Free local pickup may be available. Contact us before purchasing to
        confirm availability and arrange pickup.
      </p>

      <h3>International shipping</h3>
      <p>We currently ship within the United States only.</p>

      <h3>Lost or damaged packages</h3>
      <p>
        Contact us at <a href="mailto:soapglowandbeautybar@gmail.com">soapglowandbeautybar@gmail.com</a> or <a href="tel:3219393483">321-939-3483</a> within 7 days of delivery.
        We’ll help resolve the issue.
      </p>
    </PolicyLayout>
  );
}
