import { useCart } from "@/context/CartContext";

import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";

function CartPage() {
  const { cartItems, clearCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="mb-6 text-2xl font-extrabold">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="mb-4 flex min-h-[60vh] flex-col items-center justify-center">
          <Icons.cart className="text-muted-foreground size-14" />
          <p className="text-muted-foreground mt-4">Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex h-[80vh] flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="border-t pt-4">
            <CartSummary />

            <Button
              className="mt-4 h-16 w-full text-lg"
              onClick={() => {
                alert("Checkout successful!");
                clearCart();
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
