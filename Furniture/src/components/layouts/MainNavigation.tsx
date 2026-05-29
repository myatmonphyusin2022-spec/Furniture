import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import type { MainNavItem } from "@/types";

import { Icons } from "@/components/Icons";

import { useCart } from "@/context/CartContext";

interface MainNavigationProps {
  items?: MainNavItem[];
}

export default function MainNavigation({ items }: MainNavigationProps) {
  const { cartItems } = useCart();

  return (
    <div className="hidden w-full items-center gap-6 lg:flex">
      {/* LOGO */}
      <Link to="/" className="flex items-center space-x-2">
        <Icons.logo className="size-7" aria-hidden="true" />

        <span className="inline-block font-bold">Furniture House</span>

        <span className="sr-only">Home</span>
      </Link>
      {/* NAVIGATION */}
      <NavigationMenu className="flex-1">
        <NavigationMenuList>
          {items?.[0]?.card && (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{items[0].title}</NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="w-96">
                  {items[0].card.map((item) => (
                    <ListItem
                      key={item.title}
                      href={item.href}
                      title={item.title}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}

          {items?.[0]?.menu &&
            items[0].menu.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to={item.href}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
      {/* CART ICON */}
      <Link to="/cart" className="relative ml-auto">
        <div className="flex size-10 items-center justify-center rounded-md border">
          <Icons.cart className="size-5" />
        </div>
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {cartItems.length}
          </span>
        )}
      </Link>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>

            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
