import { Icons } from "@/components/Icons";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { products } from "@/data/products";
import { Link, useParams } from "react-router";

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find(
    (product) => product.id === productId
  );

  return (
    <div className="container mx-auto p-4">
      <Button asChild className="mb-4">
        <Link
          to="/products"
          className="flex items-center gap-2"
        >
          <Icons.arrowLeft className="h-4 w-4" />
          <span>All Products</span>
        </Link>
      </Button>

      <section></section>

      <section className="space-y-6">
        <h2 className="line-clamp-1 text-2xl font-bold">
          More Products from Furniture Shop
        </h2>

        <ScrollArea className="pb-4">
          <div className="flex gap-4">
            {products.slice(0, 4).map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                className="min-w-[260px]"
              />
            ))}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}

export default ProductDetail;