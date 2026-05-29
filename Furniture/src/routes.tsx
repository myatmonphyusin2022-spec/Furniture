import { createBrowserRouter } from "react-router-dom";

import { lazy, Suspense } from "react";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

import RootLayout from "./pages/RootLayout";

import Error from "./pages/Error";

import CartPage from "@/pages/products/Cart";

import ProductPage from "./pages/products/Product";
import ProductDetailPage from "./pages/products/ProductDetail";
import ProductRootLayout from "./pages/products/ProductRootLayout";

// LAZY IMPORTS
const BlogPage = lazy(() => import("@/pages/blogs/Blog"));

const BlogDetailPage = lazy(() => import("@/pages/blogs/BlogDetail"));

const BlogRootLayout = lazy(() => import("@/pages/BlogRootLayout"));

// LOADING UI
const SuspenseFallback = () => <div className="text-center">Loading....</div>;

export const router = createBrowserRouter([
  {
    path: "/",

    Component: RootLayout,

    errorElement: <Error />,

    children: [
      // HOME
      {
        index: true,

        Component: HomePage,
      },

      // ABOUT
      {
        path: "about",

        Component: AboutPage,
      },

      // CART
      {
        path: "cart",

        Component: CartPage,
      },

      // BLOGS
      {
        path: "blogs",

        element: (
          <Suspense fallback={<SuspenseFallback />}>
            <BlogRootLayout />
          </Suspense>
        ),

        children: [
          {
            index: true,

            element: (
              <Suspense fallback={<SuspenseFallback />}>
                <BlogPage />
              </Suspense>
            ),
          },

          {
            path: ":postId",

            element: (
              <Suspense fallback={<SuspenseFallback />}>
                <BlogDetailPage />
              </Suspense>
            ),
          },
        ],
      },

      // PRODUCTS
      {
        path: "products",

        Component: ProductRootLayout,

        children: [
          {
            index: true,

            Component: ProductPage,
          },

          {
            path: ":productId",

            Component: ProductDetailPage,
          },
        ],
      },
    ],
  },
]);
