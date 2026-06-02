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
    <div className="space-y-2 border-t pt-4">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <span>
          {shipping === 0 ? "Free" : formatPrice(shipping)}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Tax</span>
        <span>{formatPrice(tax)}</span>
      </div>

      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
    </div>
  );
}

export default CartSummary;