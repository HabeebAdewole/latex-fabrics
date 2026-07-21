import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";
import Footer from "./Footer";
import clsx from "clsx";

/** Footer shows on all pages at desktop; on mobile only Home and About (COMP-003). */
const MOBILE_FOOTER_ROUTES = ["/", "/about"];

export default function Layout() {
  const { pathname } = useLocation();
  const footerOnMobile = MOBILE_FOOTER_ROUTES.includes(pathname);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {/* pb-16 clears the fixed mobile bottom nav */}
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <div className={clsx("pb-16 md:pb-0", !footerOnMobile && "hidden md:block")}>
        <Footer />
      </div>
      <BottomNav />
    </div>
  );
}
