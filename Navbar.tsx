"use client";
import Link from "next/link";
import React from "react";
import "../css/Navbar.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  interface navtype {
    href: string;
    link_name: string;
  }

  const navLinks: navtype[] = [
    {
      href: "/",
      link_name: "Home",
    },
    {
      href: "/products",
      link_name: "Products",
    },
    {
      href: "/school",
      link_name: "School",
    },
    {
      href: "/office",
      link_name: "Office",
    },
    {
      href: "/_libs",
      link_name: "_Libs public",
    },
  ];

  const navmenu = navLinks.map((item, index) => {
    let isActive: boolean = false;
    if (pathname === "/" && pathname == item.href) {
      isActive = true;
    } else {
      if (pathname.startsWith(item.href) && item.href.length >= 2) {
        isActive = true;
      }
    }

    console.log(pathname.slice(1).length);
    return (
      <Link
        href={item.href}
        key={index}
        className={
          isActive
            ? "font-bold text-red-500  underline underline-offset-1"
            : "text-blue-700 underline underline-offset-1"
        }
      >
        {item.link_name}
      </Link>
    );
  });

  return (
    <div>
      <h1> Welcome Home!</h1>
      {navmenu}
    </div>
  );
};

export default Navbar;
// Check if current pathname starts with href but is not an exact match

// const isActive = pathname.startsWith(item.href) && pathname !== item.href; // Check if current pathname starts with href but is not an exact match
