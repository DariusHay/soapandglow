import crypto from "node:crypto";
import { findProduct } from "../shared/product-catalog.mjs";

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

function normalizeItems(items = []) {
  return items.map((item) => {
    const product = findProduct(item.slug);
    const quantity = Math.max(1, Math.min(20, Number(item.quantity || 1)));

    if (!product) {
      throw new Error(`Unknown product: ${item.slug}`);
    }

    return {
      name: product.name,
      quantity: String(quantity),
      base_price_money: {
        amount: product.priceCents,
        currency: "USD",
      },
      note: product.slug,
    };
  });
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  try {
    const accessToken = requiredEnv("SQUARE_ACCESS_TOKEN");
    const locationId = requiredEnv("SQUARE_LOCATION_ID");
    const environment = process.env.SQUARE_ENVIRONMENT || "production";
    const squareBaseUrl =
      environment === "sandbox"
        ? "https://connect.squareupsandbox.com"
        : "https://connect.squareup.com";

    const parsed = JSON.parse(event.body || "{}");
    const lineItems = normalizeItems(parsed.items);

    if (!lineItems.length) {
      return json(400, { error: "Cart is empty." });
    }

    const siteUrl = process.env.SITE_URL || "http://localhost:8888";
    const redirectUrl =
      process.env.SQUARE_SUCCESS_URL || `${siteUrl}/#/checkout/success`;

    const response = await fetch(`${squareBaseUrl}/v2/online-checkout/payment-links`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "Square-Version": "2026-05-20",
      },
      body: JSON.stringify({
        idempotency_key: crypto.randomUUID(),
        order: {
          location_id: locationId,
          line_items: lineItems,
        },
        checkout_options: {
          redirect_url: redirectUrl,
          merchant_support_email:
            process.env.MERCHANT_SUPPORT_EMAIL ||
            "soapglowandbeautybar@gmail.com",
          enable_coupon: false,
          ask_for_shipping_address:
            process.env.SQUARE_ASK_FOR_SHIPPING !== "false",
        },
      }),
    });

    const payload = await response.json();

    if (!response.ok) {
      return json(response.status, {
        error: "Square checkout could not be created.",
        details: payload,
      });
    }

    return json(200, {
      checkoutUrl: payload.payment_link?.url,
      orderId: payload.payment_link?.order_id,
    });
  } catch (error) {
    return json(500, { error: error.message || "Checkout failed." });
  }
}
