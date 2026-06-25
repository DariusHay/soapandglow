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

function formatMoney(money) {
  return money?.amount ? `$${(money.amount / 100).toFixed(2)}` : "Unknown amount";
}

async function sendEmailNotification({ subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ORDER_NOTIFICATION_EMAIL;
  const from = process.env.ORDER_NOTIFICATION_FROM || "orders@example.com";

  if (!apiKey || !to) {
    console.log("Order notification skipped. RESEND_API_KEY or ORDER_NOTIFICATION_EMAIL is missing.");
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });

  if (!response.ok) {
    const message = await response.text();
    console.error("Order email notification failed.", message);
  }
}

async function sendTextNotification({ body }) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const to = process.env.ORDER_NOTIFICATION_PHONE;
  const from = process.env.TWILIO_FROM_NUMBER;
  const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;

  if (!accountSid || !authToken || !to || (!from && !messagingServiceSid)) {
    console.log("Order text notification skipped. Twilio environment variables are missing.");
    return;
  }

  const params = new URLSearchParams({
    To: to,
    Body: body,
  });

  if (messagingServiceSid) {
    params.set("MessagingServiceSid", messagingServiceSid);
  } else {
    params.set("From", from);
  }

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    }
  );

  if (!response.ok) {
    const message = await response.text();
    console.error("Order text notification failed.", message);
  }
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
    const amount = formatMoney(payment.amount_money);
    const orderId = payment.order_id || "Not provided";
    const paymentId = payment.id || "Not provided";

    await sendEmailNotification({
      subject: "New Soap Glow order paid",
      html: `
        <h1>New paid order</h1>
        <p><strong>Amount:</strong> ${amount}</p>
        <p><strong>Payment ID:</strong> ${paymentId}</p>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p>Open Square Dashboard for the full customer, shipping, and fulfillment details.</p>
      `,
    });

    await sendTextNotification({
      body: `New Soap Glow order paid: ${amount}. Order ID: ${orderId}. Open Square Dashboard for customer and fulfillment details.`,
    });
  }

  return { statusCode: 200, body: "OK" };
}
