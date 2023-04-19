"use client";

import { ThemeToggle } from "@/components/theme";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icon } from "@iconify/react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const links = [
  { href: "/", title: "Home" },
  { href: "/trending", title: "Trending" },
  { href: "/about", title: "About" },
];

const Navbar = () => {
  const SocialLinks = () => {
    const socialLinks = [
      {
        href: "https://twitter.com/xavier___castro",
        icon: <Twitter strokeWidth={1} />,
      },
      {
        href: "https://www.instagram.com/xavier___castro/",
        icon: <Instagram strokeWidth={1} />,
      },
      {
        href: "https://www.linkedin.com/in/xavier-castro-9b2a01153/",
        icon: <Linkedin strokeWidth={1} />,
      },
      {
        href: "https://github.com/xavier-castro",
        icon: <Github strokeWidth={1} />,
      },
    ];

    return (
      <>
        <div className="hidden sm:block">
          <div className="flex justify-center gap-4">
            {socialLinks.map((item, index) => (
              <div key={index}>
                <a href={item.href} target="_blank">
                  {item.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <header className="p-2">
      <nav className="flex items-center justify-between list-none">
        <SocialLinks />
        <NavigationMenu>
          {links.map((item, index) => (
            <div key={index}>
              <NavigationMenuItem>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
          ))}
        </NavigationMenu>
        <ThemeToggle />
        <div className="hidden sm:block">
          <Button>Sign In</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
