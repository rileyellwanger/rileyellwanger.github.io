import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <HeroUINavbar className="bg-primary" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/4 sm:basis-full" justify="start">
        <NavbarBrand>
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <img
              alt="Logo"
              className="w-10 h-10 rounded-full"
              src="/favicon.ico"
            />
            <span className="text-2xl font-bold text-foreground">
              {siteConfig.name}
            </span>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-2/4 sm:basis-full">
        <div className="hidden lg:flex gap-4 mx-auto">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/4 sm:basis-full"
        justify="end"
      />

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "w-full",
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
