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
    <div>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/docs">Ericson</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/docs">Skills & Tech</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="mr-2">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/docs">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
