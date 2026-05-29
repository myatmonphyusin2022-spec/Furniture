// src/context/CartContext.tsx

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image?: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];

  addToCart: (
    product: Omit<CartItem, "quantity">,
  ) => void;

  removeFromCart: (
    id: string,
  ) => void;
}

const CartContext =
  createContext<CartContextType | null>(
    null,
  );

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({
  children,
}: CartProviderProps) {
  const [cartItems, setCartItems] =
    useState<CartItem[]>([]);

  // ADD TO CART
  const addToCart = (
    product: Omit<CartItem, "quantity">,
  ) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.id === product.id,
      );

      // IF PRODUCT EXISTS
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item,
        );
      }

      // NEW PRODUCT
      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // REMOVE ITEM
  const removeFromCart = (
    id: string,
  ) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => item.id !== id,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// CUSTOM HOOK
// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider",
    );
  }

  return context;
}