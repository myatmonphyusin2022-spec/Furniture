import React from "react";
import { products, filterList } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";
import Pagination from "@/components/products/Pagination";
import { useSearchParams } from "react-router";

function Product() {
  const [searchParams] = useSearchParams();

  const categoryId = searchParams.get("categories");
  const typeId = searchParams.get("type");

  let filteredProducts = products;

  if (categoryId) {
    filteredProducts = filteredProducts.filter(
      (product) => product.categoryId === categoryId,
    );
  }

  if (typeId) {
    filteredProducts = filteredProducts.filter(
      (product) => product.type === typeId,
    );
  }

  return (
    <div className="container mx-auto">
      <section className="flex flex-col lg:flex-row">
        <section className="my-8 ml-4 w-full lg:ml-0 lg:w-1/5">
          <ProductFilter filterList={filterList} />
        </section>

        <section className="w-full lg:ml-0 lg:w-4/5">
          <h1 className="text-2xl font-bold">All Products</h1>

          <div className="mb-12 grid grid-cols-1 gap-6 gap-y-12 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination />
        </section>
      </section>
    </div>
  );
}

export default Product;
