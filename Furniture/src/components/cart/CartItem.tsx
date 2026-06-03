import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Editable from "./Editable";

interface CartItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
}

function CartItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center">
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="h-20 w-20 rounded-md object-cover md:h-24 md:w-24"
      />

      {/* Product Info */}
      <div className="flex-1">
        <h2 className="font-semibold">{item.title}</h2>

        <p className="text-muted-foreground">{formatPrice(item.price)}</p>
      </div>

      {/* Quantity */}
      <div className="md:w-40">
        <Editable
          quantity={item.quantity}
          onUpdate={(quantity) => updateQuantity(item.id, quantity)}
        />
      </div>

      {/* Price + Remove */}
      <div className="flex flex-col items-end gap-2 md:w-32">
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
  );
}

export default CartItem;
