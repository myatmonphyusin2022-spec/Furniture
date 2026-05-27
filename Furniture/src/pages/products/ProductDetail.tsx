import { Icons } from "@/components/Icons";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { products } from "@/data/products";
import { Link, useParams } from "react-router";
import Autoplay from "embla-carousel-autoplay";
import { Separator } from "@/components/ui/separator";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { formatPrice } from "@/lib/utils";
import Rating from "@/components/products/Rating";
import AddToFavorite from "@/components/products/AddToFavorite";

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );
  return (
    <div className="container mx-auto p-4">
      <Button asChild className="mb-4">
        <Link to="/products" className="flex items-center gap-2">
          <Icons.arrowLeft className="h-4 w-4" />
          <span>All Products</span>
        </Link>
      </Button>

      <section className="my-6 flex flex-col gap-8 md:flex-row md:gap-16">
        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true }}
          className="w-full md:w-1/2"
        >
          <CarouselContent>
            {product?.images.map((image) => (
              <CarouselItem key={image}>
                <div className="relative h-96 w-full">
                  <img
                    src={image}
                    alt={product?.name}
                    className="size-full rounded-md object-cover"
                  ></img>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Separator className="mt-4 md:hidden" />
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="space-y-2">
            <h2 className="line-clamp-1 text-2xl font-bold">{product?.name}</h2>
            <p className="text-muted-foreground text-base">
              {formatPrice(Number(product?.price))}
            </p>
          </div>
          <Separator className="my-1.5" />
          <p className="text-muted-foreground text-base">
            {product?.inventory} in stock
          </p>
          <div className="flex items-center justify-between">
            <Rating rating={Number(product?.rating)} />
            <AddToFavorite productId={String(product?.id)} rating={Number(product?.rating)} />
          </div>
        </div>
      </section>

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
