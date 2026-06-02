import Header from "@/components/layouts/Header";

import Footer from "@/components/layouts/Footer";
import { Outlet, useLocation } from "react-router";
function RootLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />

      <main className="mt-16 flex-1">
        <Outlet />
      </main>

      {location.pathname !== "/cart" && <Footer />}
    </div>
  );
}
export default RootLayout;
