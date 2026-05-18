import { Link } from "react-router";
import type { Product } from "@/types/products";
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

import { formatPrice } from "@/lib/utils";
interface ProductProps {
  product: Product;
}
function ProductCard({ product }: ProductProps) {
  return (
    <Card className="rounder-lg size-full overflow-hidden">
      <Link to={`/products/${product.id}`} aria-label={product.name}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src={product.images[0]}
              alt="prodcut image"
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

      <CardFooter className="p-4 pt-1">
        {product.status === "sold" ? (
          <Button
            size="sm"
            disabled={true}
            aria-label="Sold Out"
            className="h-8 w-full rounded-sm"
          ></Button>
        ) : (
          <Button size="sm" className="bg-own h-8 w-full rounded-sm font-bold">
            <Icons.plus className="" />
            Add To Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
