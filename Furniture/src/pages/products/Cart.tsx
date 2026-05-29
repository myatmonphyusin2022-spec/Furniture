import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="container py-10">
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>

      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-lg border p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="size-24 rounded-md object-cover"
              />

              <div className="flex-1">
                <h2 className="font-semibold">{item.title}</h2>

                <p className="text-muted-foreground">
                  {formatPrice(item.price)}
                </p>

                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CartPage;
