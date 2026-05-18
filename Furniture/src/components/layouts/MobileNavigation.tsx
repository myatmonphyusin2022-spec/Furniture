import type { MainNavItem } from "@/types";
import { Icons } from "@/components/Icons";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MainNavigationProps {
  items?: MainNavItem[];
}

function MobileNavigation({ items }: MainNavigationProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const query = "(min-width: 1024px)";

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setIsDesktop(event.matches);
    }
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    return () => result.removeEventListener("change", onChange);
  }, [query]);
  if (isDesktop) {
    return null;
  }
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-4 size-5">
            <Icons.menu aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pt-9">
          <SheetClose>
            <Link to="/" className="flex items-center">
              <Icons.logo className="mr-2 size-4" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </SheetClose>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>{items[0].title}</AccordionTrigger>
                <AccordionContent>
                  <div className="pl-left flex flex-col space-y-2">
                    {items?.[0].card?.map((item) => (
                      <SheetClose asChild>
                        <Link
                          to={String(item.href)}
                          className="text-foreground/70"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-4 flex flex-col space-y-2">
              {items?.[0].menu?.map((item) => (
                <SheetClose asChild>
                  <Link to={String(item.href)} className="">
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavigation;
