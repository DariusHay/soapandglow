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
        <li>Orders up to $25.00: $6.00</li>
        <li>Orders over $25.00 through $50.00: $8.50</li>
        <li>Orders over $50.00 through $75.00: $10.00</li>
        <li>Orders over $75.00 through $100.00: $12.00</li>
        <li>Orders over $100.00 through $150.00: $14.00</li>
        <li>Orders over $150.00: $16.00</li>
      </ul>

      <h3>Delivery time</h3>
      <ul>
        <li>Standard shipping: 5–7 business days after processing</li>
        <li>Delivery times may vary by destination and carrier</li>
      </ul>

      <h3>International shipping</h3>
      <p>We currently ship within the United States only.</p>

      <h3>Prearranged local pickup</h3>
      <p>
        Local pickup is available by direct arrangement with the owner. Select
        prearranged local pickup in your cart and provide a mobile number. No
        shipping fee will be charged. The owner will call or text within 24–48
        hours to confirm pickup details. Please do not arrive until your pickup
        has been confirmed.
      </p>

      <h3>Lost or damaged packages</h3>
      <p>
        Contact us at <a href="mailto:soapglowandbeautybar@gmail.com">soapglowandbeautybar@gmail.com</a> or <a href="tel:3219393483">321-939-3483</a> within 7 days of delivery.
        We’ll help resolve the issue.
      </p>
    </PolicyLayout>
  );
}
