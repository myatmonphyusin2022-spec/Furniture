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
    <div className="flex items-center gap-3 rounded-lg border p-3">
      <img
        src={item.image}
        alt={item.title}
        className="h-16 w-16 rounded-md object-cover md:h-20 md:w-20"
      />

      <div className="flex-1">
        <h2 className="text-sm font-semibold md:text-base">{item.title}</h2>

        <p className="text-muted-foreground text-sm">
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
  );
}

export default CartItem;
