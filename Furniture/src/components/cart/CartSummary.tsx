import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

function CartSummary() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="space-y-4 rounded-lg border p-4 md:p-6">
      <div className="flex items-center justify-between text-sm md:text-base">
        <span className="text-muted-foreground">Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>

      <div className="flex items-center justify-between text-sm md:text-base">
        <span className="text-muted-foreground">Shipping</span>
        <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
      </div>

      <div className="flex items-center justify-between text-sm md:text-base">
        <span className="text-muted-foreground">Tax</span>
        <span>{formatPrice(tax)}</span>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between text-lg font-bold md:text-xl">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
