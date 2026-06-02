import { useCart } from "@/context/CartContext";

import { formatPrice } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { Icons } from "@/components/Icons";
import Editable from "@/components/cart/Editable";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="container py-10">
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>

      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 py-20">
            <Icons.cart className="text-muted-foreground size-14" />

            <p className="text-muted-foreground">Your cart is empty.</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-lg border p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="size-24 rounded-md object-cover"
                />

                <div className="flex-1 space-y-1">
                  <h2 className="font-semibold">{item.title}</h2>

                  <p className="text-muted-foreground">
                    {formatPrice(item.price)}
                  </p>

                  <Editable
                    quantity={item.quantity}
                    onUpdate={(quantity) => updateQuantity(item.id, quantity)}
                  />
                </div>

                <div className="flex flex-col items-end gap-2">
                  <p className="font-semibold">
                    {formatPrice(item.price * item.quantity)}
                  </p>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}

            {/* TOTAL */}
            <div className="mt-6 flex items-center justify-between border-t pt-6">
              <h2 className="text-2xl font-bold">Total</h2>

              <p className="text-2xl font-bold">{formatPrice(totalPrice)}</p>
            </div>

            {/* CHECKOUT BUTTON */}
            <div className="flex justify-end">
              <Button
                className="mt-4 px-8"
                onClick={() => {
                  alert("Checkout successful!");
                  clearCart();
                }}
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
