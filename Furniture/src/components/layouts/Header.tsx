import MainNavigation from "@/components/layouts/MainNavigation";
import { siteConfig } from "@/config/site";
import MobileNavigation from "@/components/layouts/MobileNavigation";
import { ModeToggle } from "../mode-toggle";

import { User } from "@/data/user";
import AuthDropdown from "./AuthDropdown";
function Header() {
  return (
    <header className="bg-background fixed top-0 z-50 w-full border-b">
      <nav className="container mx-auto flex h-16 items-center">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="mx-auto flex h-16 flex-1 items-center justify-end lg:mr-0">
          <ModeToggle />
          <AuthDropdown user={User} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
