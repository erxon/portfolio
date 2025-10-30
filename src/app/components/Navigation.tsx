"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/theme-mode-toggle";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="">
      <NavigationMenu className="text-sm">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="#home">Ericson</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="#skills">Skills & Tech</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="mr-2">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="#projects">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <div className="">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
