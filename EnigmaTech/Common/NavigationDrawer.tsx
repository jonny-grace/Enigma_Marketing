"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
type Anchor = "left";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PaymentIcon from "@mui/icons-material/Payment";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import DescriptionIcon from "@mui/icons-material/Description";
export default function NavigationDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button></button>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            sx={{
              color: "#DC2626",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <Box
              sx={{
                width: 250,
                backgroundColor: "#DC2626",
                height: "100%",
              }}
              role="presentation"
              onClick={toggleDrawer("left", false)}
              onKeyDown={toggleDrawer("left", false)}
            >
              <div className="overflow-x-hidden px-3">
                <div className="flex justify-between px-5 text-white mt-8 h-min">
                  <Image
                    src="/wanderweb4.png"
                    alt="spector"
                    width={150}
                    height={100}
                    className="h-24 w-24 self-center object-contain pointer-events-none select-none"
                  />
                  <IconButton
                    sx={{
                      color: "white",
                      height: "min",
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                </div>

                <section className="mt-10 flex flex-col gap-2 pl-3">
                  <Link
                    href="/"
                    className="text-white uppercase font-medium font-sans tracking-wider flex justify-start items-center gap-2  border-2 border-white rounded-lg px-2"
                  >
                    <HomeIcon className="text-2xl text-white" />
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-white uppercase font-medium font-sans tracking-wider flex justify-start items-center gap-2 border-2 border-white rounded-lg px-2"
                  >
                    <DescriptionIcon className="text-2xl text-white" />
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="text-white uppercase font-medium font-sans tracking-wider flex justify-start items-center gap-2  border-2 border-white rounded-lg px-2"
                  >
                    <MiscellaneousServicesIcon className="text-2xl " />
                    Services
                  </Link>

                  <Link
                    href="/blogs"
                    className="text-white uppercase font-medium font-sans tracking-wider flex justify-start items-center gap-2  border-2 border-white rounded-lg px-2"
                  >
                    <PaymentIcon className="text-2xl text-white" />
                    Blogs
                  </Link>
                  <Link
                    href="/contact-us"
                    className="text-white uppercase font-medium font-sans tracking-wider flex justify-start items-center gap-2  border-2 border-white rounded-lg px-2"
                  >
                    <ContactPageIcon className="text-2xl" />
                    CONTACT US
                  </Link>
                </section>

                <section className="mt-14">
                  <h1 className="text-white text-center font-serif tracking-wider text-2xl ">
                    Visit Us
                  </h1>
                  <h3 className="text-white text-center text-sm font-medium tracking-wide">
                    Addis Ababa , Ethiopia
                  </h3>
                  <h3 className="text-white text-center text-sm font-medium tracking-wide">
                    wanderweb@gmail.com
                  </h3>
                </section>

                <section className="mt-5 text-white">
                  <h2 className="text-center text-gray-200 font-bold tracking-wider">
                    CALL Now
                  </h2>
                  <h2 className="text-center text-white font-bold text-lg">
                    +251 936207512
                  </h2>
                </section>
              </div>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
