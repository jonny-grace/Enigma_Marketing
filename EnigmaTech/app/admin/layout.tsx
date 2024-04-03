import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import AdminNavbar from "@/Common/AdminNavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WanderWeb",
  description:
    "Welcome to WanderWeb, where exceptional web development meets creative innovation. Transform your digital presence with our cutting-edge solutions tailored to elevate your brand and captivate your audience.",
  keywords:
    "web development, digital transformation, creative innovation, brand elevation",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "hello",
    images: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AdminNavbar />
        {children}
       
      </body>
    </html>
  );
}
