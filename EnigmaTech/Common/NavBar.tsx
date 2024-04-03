
'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavigationDrawer from "./NavigationDrawer";
import { usePathname } from "next/navigation";

// import { usePathname } from "next/navigation";
const NavBar: React.FC = () => {

  const pathname = usePathname();
  
  if (pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <nav className="flex items-center px-5 md:px-8 lg:px-16 py-4 w-full">
      <div className="px-3 sm:px-5 xll:px-28 flex justify-between items-centers py-3 w-full">
        <div className="flex items-center gap-x-3">
          <div className=" md:hidden"><NavigationDrawer /></div>

          <Link href={'/'}><Image
            src="/enigmatech3.png"
            width={1000}
            height={1000}
            alt="logo"
            className="h-8 w-full object-contain"
          /></Link>
        </div>
        <div className="hidden md:flex gap-x-5 text-lg items-center"></div>
        <div className="hidden md:flex gap-x-5 items-center text-lg capitalize text-primary">
          <Link
            href="/"
            className="capitalize text-lg whitespace-nowrap font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="capitalize text-lg whitespace-nowrap  font-medium"
          >
            About
          </Link>
          <Link
            href="/services"
            className="capitalize text-lg whitespace-nowrap  font-medium"
          >
            services
          </Link>
          <Link
            href="/blogs"
            className="capitalize text-lg whitespace-nowrap  font-medium"
          >
            Blogs
          </Link>
          <Link
            href="/contact-us"
            className="capitalize text-lg whitespace-nowrap  font-medium"
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
