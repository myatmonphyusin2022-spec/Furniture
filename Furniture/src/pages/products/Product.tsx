import React from "react";
import { products, filterList } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";
import Pagination from "@/components/products/Pagination";
function Product() {
  return (
    <div>
      <section className="">
        <section className="">
          <ProductFilter
            title="Furniture made by"
            filterlist={filterList.categories}
          />
          <ProductFilter
            title="Furniture Types"
            filterlist={filterList.types}
          />
        </section>
        <section className="">
          <h1 className="">All Products</h1>
          <div className="">
            {products.map((product) => (
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
