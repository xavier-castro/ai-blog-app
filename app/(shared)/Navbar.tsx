"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icon } from "@iconify/react";
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
        title: "Instagram",
        iconName: "skill-icons:instagram",
      },
      {
        href: "https://www.instagram.com/xavier___castro/",
        title: "Twitter",
        iconName: "logos:twitter",
      },
      {
        href: "https://www.linkedin.com/in/xavier-castro-9b2a01153/",
        title: "LinkedIn",
        iconName: "logos:linkedin-icon",
      },
      {
        href: "https://github.com/xavier-castro",
        title: "Github",
        iconName: "logos:github-icon",
      },
    ];

    return (
      <>
        <div className="hidden sm:block">
          <div className="flex justify-center gap-4">
            {socialLinks.map((item, index) => (
              <div key={index}>
                <a href={item.href} target="_blank">
                  <Icon icon={item.iconName} fontSize={16} />
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
      <nav className="flex justify-between items-center list-none">
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
        <div className="hidden sm:block">
          <Button>Sign In</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
