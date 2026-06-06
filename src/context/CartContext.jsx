import { useEffect, useMemo, useState } from "react";
import { products } from "../data/products";
import { CartContext } from "./cart-context";
const STORAGE_KEY = "soap-glow-cart";

function readStoredCart() {
  if (typeof window === "undefined") return [];

  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const cartItems = useMemo(
    () =>
      items
        .map((item) => {
          const product = getProduct(item.slug);
          if (!product) return null;

          return {
            ...item,
            product,
            lineTotal: product.price * item.quantity,
          };
        })
        .filter(Boolean),
    [items]
  );

  const totals = useMemo(() => {
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce((sum, item) => sum + item.lineTotal, 0);

    return { itemCount, subtotal };
  }, [cartItems]);

  function addItem(product, quantity = 1) {
    setItems((current) => {
      const existing = current.find((item) => item.slug === product.slug);
      if (existing) {
        return current.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...current, { slug: product.slug, quantity }];
    });
  }

  function updateQuantity(slug, quantity) {
    const nextQuantity = Number(quantity);

    setItems((current) =>
      current
        .map((item) =>
          item.slug === slug
            ? { ...item, quantity: Math.max(0, nextQuantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(slug) {
    setItems((current) => current.filter((item) => item.slug !== slug));
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        ...totals,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
