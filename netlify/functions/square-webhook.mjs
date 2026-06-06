import crypto from "node:crypto";

function verifySquareSignature(event) {
  const signatureKey = process.env.SQUARE_WEBHOOK_SIGNATURE_KEY;
  const notificationUrl = process.env.SQUARE_WEBHOOK_URL;
  const signature =
    event.headers["x-square-hmacsha256-signature"] ||
    event.headers["X-Square-HmacSha256-Signature"];

  if (!signatureKey || !signature || !notificationUrl) return false;

  const hmac = crypto.createHmac("sha256", signatureKey);
  hmac.update(notificationUrl + event.body);
  const expected = hmac.digest("base64");
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  return (
    signatureBuffer.length === expectedBuffer.length &&
    crypto.timingSafeEqual(signatureBuffer, expectedBuffer)
  );
}

async function sendNotification({ subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ORDER_NOTIFICATION_EMAIL;
  const from = process.env.ORDER_NOTIFICATION_FROM || "orders@example.com";

  if (!apiKey || !to) {
    console.log("Order notification skipped. RESEND_API_KEY or ORDER_NOTIFICATION_EMAIL is missing.");
    return;
  }

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  if (!verifySquareSignature(event)) {
    return { statusCode: 401, body: "Invalid signature" };
  }

  const payload = JSON.parse(event.body || "{}");
  const type = payload.type;
  const payment = payload.data?.object?.payment;

  if (type === "payment.updated" && payment?.status === "COMPLETED") {
    const amount = payment.amount_money?.amount
      ? `$${(payment.amount_money.amount / 100).toFixed(2)}`
      : "Unknown amount";

    await sendNotification({
      subject: "New Soap Glow order paid",
      html: `
        <h1>New paid order</h1>
        <p><strong>Amount:</strong> ${amount}</p>
        <p><strong>Payment ID:</strong> ${payment.id}</p>
        <p><strong>Order ID:</strong> ${payment.order_id || "Not provided"}</p>
        <p>Open Square Dashboard for the full customer, shipping, and fulfillment details.</p>
      `,
    });
  }

  return { statusCode: 200, body: "OK" };
}
