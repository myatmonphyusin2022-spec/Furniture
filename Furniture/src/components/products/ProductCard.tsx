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
        <CardContent className="">
          <CardTitle className="">{product.name}</CardTitle>
          <CardDescription>{product.price}</CardDescription>
        </CardContent>
      </Link>

      <CardFooter className="flex justify-between">
        {product.status === "sold" ? (
          <Button
            size="sm"
            disabled={true}
            aria-label="Sold Out"
            className=""
          ></Button>
        ) : (
          <Button size="sm" className=""> <Icons.plus className=""/>Add To Cart</Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
