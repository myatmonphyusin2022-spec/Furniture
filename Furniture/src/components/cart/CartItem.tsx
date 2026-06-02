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
    <div className="flex items-center gap-4 rounded-lg border p-4">
      <img
        src={item.image}
        alt={item.title}
        className="h-20 w-20 rounded-md object-cover md:h-24 md:w-24"
      />

      <div className="min-w-0 flex-1">
        <h2 className="truncate font-semibold">{item.title}</h2>

        <p className="text-muted-foreground text-sm">
          {formatPrice(item.price)}
        </p>

        <Editable
          quantity={item.quantity}
          onUpdate={(quantity) => updateQuantity(item.id, quantity)}
        />
      </div>

      <div className="flex flex-col items-end gap-2">
        <p className="text-sm font-semibold md:text-base">
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
