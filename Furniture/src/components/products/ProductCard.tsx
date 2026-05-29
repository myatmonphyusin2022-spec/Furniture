import { Link } from "react-router";

import {Product} from "@/types";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Icons } from "../Icons";

import { formatPrice, cn } from "@/lib/utils";

import { useCart } from "@/context/CartContext";

interface ProductProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

function ProductCard({ product, className }: ProductProps) {
  const { addToCart } = useCart();

  return (
    <Card className={cn("size-full overflow-hidden rounded-lg", className)}>
      {/* PRODUCT LINK */}
      <Link to={`/products/${product.id}`} aria-label={product.name}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src={product.images[0]}
              alt="product image"
              className="size-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>

        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>

          <CardDescription className="line-clamp-1">
            {formatPrice(product.price)}

            {product.discount > 0 && (
              <span className="ml-2 font-extralight line-through">
                {formatPrice(product.discount)}
              </span>
            )}
          </CardDescription>
        </CardContent>
      </Link>

      {/* FOOTER */}
      <CardFooter className="p-4 pt-1">
        {product.status === "sold" ? (
          <Button
            size="sm"
            disabled
            aria-label="Sold Out"
            className="h-8 w-full rounded-sm"
          >
            Sold Out
          </Button>
        ) : (
          <Button
            size="sm"
            className="bg-own h-8 w-full rounded-sm font-bold"
            onClick={(e) => {
              e.stopPropagation();

              addToCart({
                id: String(product.id),
                title: product.name,
                price: product.price,
                image: product.images[0],
              });
            }}
          >
            <Icons.plus className="mr-1 size-4" />
            Add To Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
