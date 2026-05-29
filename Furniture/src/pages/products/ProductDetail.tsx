import { Icons } from "@/components/Icons";

import ProductCard from "@/components/products/ProductCard";
import Rating from "@/components/products/Rating";
import AddToFavorite from "@/components/products/AddToFavorite";

import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Separator } from "@/components/ui/separator";

import { products } from "@/data/products";

import { Link, useNavigate, useParams } from "react-router-dom";

import Autoplay from "embla-carousel-autoplay";

import React, { useState } from "react";

import { formatPrice } from "@/lib/utils";

import { useCart } from "@/context/CartContext";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const navigate = useNavigate();

  const { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    }),
  );

  // PRODUCT NOT FOUND
  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
      </div>
    );
  }

  // BUY NOW
  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: String(product.id),
        title: product.name,
        price: product.price,
        image: product.images[0],
      });
    }

    navigate("/cart");
  };

  // ADD TO CART
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: String(product.id),
        title: product.name,
        price: product.price,
        image: product.images[0],
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* BACK BUTTON */}
      <Button asChild className="mb-4">
        <Link to="/products" className="flex items-center gap-2">
          <Icons.arrowLeft className="h-4 w-4" />

          <span>All Products</span>
        </Link>
      </Button>

      {/* PRODUCT SECTION */}
      <section className="my-6 flex flex-col gap-8 md:flex-row md:gap-16">
        {/* IMAGE CAROUSEL */}
        <Carousel
          // eslint-disable-next-line react-hooks/refs
          plugins={[plugin.current]}
          opts={{ loop: true }}
          className="w-full md:w-1/2"
        >
          <CarouselContent>
            {product.images.map((image) => (
              <CarouselItem key={image}>
                <div className="relative h-96 w-full overflow-hidden rounded-md">
                  <img
                    src={image}
                    alt={product.name}
                    className="size-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Separator className="mt-4 md:hidden" />

        {/* PRODUCT INFO */}
        <div className="flex flex-col gap-5 md:w-1/2">
          {/* TITLE */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">{product.name}</h2>

            <p className="text-2xl font-semibold">
              {formatPrice(Number(product.price))}
            </p>
          </div>

          <Separator />

          {/* STOCK */}
          <p className="text-muted-foreground text-base">
            {product.inventory} in stock
          </p>

          {/* RATING */}
          <div className="flex items-center justify-between">
            <Rating rating={Number(product.rating)} />

            <AddToFavorite
              productId={String(product.id)}
              rating={Number(product.rating)}
            />
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity</span>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                <Icons.minus className="size-4" />
              </Button>

              <span className="w-8 text-center font-medium">{quantity}</span>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <Icons.plus className="size-4" />
              </Button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="flex-1" onClick={handleBuyNow}>
              Buy Now
            </Button>

            <Button
              variant="outline"
              className="flex-1"
              onClick={handleAddToCart}
            >
              <Icons.cart className="mr-2 size-4" />
              Add To Cart
            </Button>
          </div>
        </div>
      </section>

      {/* MORE PRODUCTS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">
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
