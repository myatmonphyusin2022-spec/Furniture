import { useCart } from "@/context/CartContext";

import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";

function CartPage() {
  const { cartItems, clearCart } = useCart();

  return (
    <div className="container py-6">
      <h1 className="mb-6 text-2xl font-bold md:text-3xl">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex min-h-[60vh] flex-col items-center justify-center">
          <Icons.cart className="text-muted-foreground size-14" />
          <p className="text-muted-foreground mt-4">Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex min-h-[70vh] flex-col">
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Summary + Checkout */}
          <div className="mt-auto space-y-4 pt-8">
            <CartSummary />

            <Button
              className="w-full "
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
