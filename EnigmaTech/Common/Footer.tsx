"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import CallToAction from "@/Components/Home/CallToAction";
import FadeOut from "./Animations/FadeOut";

import { usePathname } from "next/navigation";

const Footer = () => {

  const pathname = usePathname();
  
  if (pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <>
      <FadeOut>
        <div className="bg-primary py-3 ">
          <div className="py-10">
            <CallToAction />
          </div>
          <hr />
          <section className="container mx-auto px-5">
            <div>
              <div className="flex justify-start">
                <Image
                  src="/wanderweb4.png"
                  height={1000}
                  width={1000}
                  alt="logo image"
                  className="h-28 w-28 object-contain pointer-events-none select-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch mt-5">
              <div className="text-gray-200 flex flex-col gap-y-1">
                <h1 className="text-white font-bold text-2xl">USEFUL LINKS</h1>
                <Link
                  href="/about"
                  className="text-sm  font-sans text-white hover:underline underline-offset-2 mt-2"
                >
                  ABOUT US
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-sans text-white hover:underline underline-offset-2 "
                >
                  OUR SERVICES
                </Link>
                <Link
                  href="/blogs"
                  className="text-sm  font-sans text-white hover:underline underline-offset-2 "
                >
                  Blogs
                </Link>
                <Link
                  href="#"
                  className="text-sm font-sans text-white hover:underline underline-offset-2 "
                >
                  PRIVACY POLICY
                </Link>
              </div>
              <div className="text-gray-200 flex flex-col gap-y-1">
                <h1 className="text-white font-bold text-2xl">OUR TERMS</h1>
                <Link
                  href="#"
                  className="text-sm  font-sans text-white hover:underline underline-offset-2 mt-2"
                >
                  SUPPORT
                </Link>
                <Link
                  href="#"
                  className="text-sm font-sans text-white hover:underline underline-offset-2 "
                >
                  CONTACTS
                </Link>
          
                <Link
                  href="#"
                  className="text-sm font-sans text-white hover:underline underline-offset-2 "
                >
                  FAQ
                </Link>
              </div>
              <div className="text-gray-200 flex flex-col gap-y-1">
                <h1 className="text-white font-bold text-2xl">Addis Ababa</h1>
                <h1 className="text-sm  font-sans text-white mt-2">
                  Eth, Auto, Addis Ababa. 665087
                </h1>
                <h1 className="text-sm font-sans text-white">
                  Phone.: 0936207512/0942110937
                </h1>
                <h1 className="text-sm  font-sans text-white">
                  E-mail.: johnlemma9@gmail.com
                </h1>
                <h1 className="">© 2023 WanderWeb</h1>
                <div className=" text-sm font-sans text-white mt-1">
                  <div className="flex gap-x-2">
                    <Link href="#">
                      <FacebookIcon className=" text-white" />
                    </Link>
                    <Link href="#">
                      <InstagramIcon className=" text-white" />
                    </Link>
                    <Link href="#">
                      <TelegramIcon className=" text-white" />
                    </Link>
                    <Link href="#">
                      <PhoneIcon className="text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </FadeOut>
    </>
  );
};

export default Footer;
