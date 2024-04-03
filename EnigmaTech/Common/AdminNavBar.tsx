'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavigationDrawer from "./NavigationDrawer";
import api from "@/app/axios";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";
const NavBar: React.FC = () => {
  const router = useRouter();
  const handleLogout=()=>{


    api
    .post("/logout", {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(() => {
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
      router.push("/");
    })
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
            href="/admin/blogs"
            className="capitalize text-lg whitespace-nowrap font-medium"
          >
            Manage Blogs
          </Link>
          <Link
            href="/admin/services"
            className="capitalize text-lg whitespace-nowrap  font-medium"
          >
            Manage Services
          </Link>
          <button
            onClick={handleLogout}
            className="capitalize text-lg whitespace-nowrap  font-medium"
          >
            Back to Home
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
