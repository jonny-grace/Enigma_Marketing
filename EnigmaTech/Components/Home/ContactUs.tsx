"use client";
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import { useState, useRef, FormEvent } from "react";
import { Spinners } from "@/assets/Icons/Spinner";
import { notify } from "@/app/toast";
import FadeOut from "@/Common/Animations/FadeOut";
import { usePathname} from 'next/navigation'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const path= usePathname();
  // Specify the type for the ref
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(true);
      notify("email sent successfully", "success");
    }, 2000);

   
  };

  return (
    <div className="container max-w-7xl mx-auto" id="contact-us">
      <FadeOut>
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center px-10 mt-8 gap-8 mb-10">
          <div>
           {path != '/contact-us' ? <h1 className=" text-gray-800 font-sans text-5xl font-medium text-center">
              Contact <span className="text-primary">Us</span>
            </h1>:null}

            <p className="text-lg text-gray-800 tracking-wide mt-5 text-center">
              Have a question about the our service? We&apos;re here to help,
              contact us today
            </p>
            <form className="grid gap-y-3 mt-3" ref={form} onSubmit={sendEmail}>
              <input
                required
                type="text"
                className="h-10 outline-none font-sans text-lg px-3 rounded-lg"
                placeholder="Name"
                name="name"
              />
              <input
                required
                type="email"
                className="h-10 outline-none font-sans text-lg px-3 rounded-lg"
                placeholder="Email"
                name="email"
              />
              <input
                required
                type="number"
                className="h-10 outline-none font-sans text-lg px-3 rounded-lg"
                placeholder="Phone Number"
                name="phoneNumber"
              />
              <textarea
                required
                name="message"
                id=""
                cols={25}
                rows={8}
                className=" font-sans text-lg px-3 rounded-md"
                placeholder="Your message ..."
              ></textarea>
              <button className="flex items-center justify-center bg-primary  font-medium rounded text-white mt-3 px-5 py-3  transition-all font-sans tracking-wider">
                <span>Send your message</span>
                <span>{loading ? <Spinners /> : null}</span>
              </button>
            </form>
          </div>
          <div className="hidden md:flex items-center">
            <Image
              src="/contactUs.jpg"
              alt="spector"
              width={2000}
              height={2000}
              className="text-center h-96  w-full object-contain object-center pointer-events-none select-none"
            />
          </div>
        </section>
      </FadeOut>
    </div>
  );
};

export default ContactUs;
