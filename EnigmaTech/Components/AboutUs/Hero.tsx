import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="h-[60vh] w-screen relative">
        <Image
          src="/about 1.jpg"
          alt="spector"
          fill
          className="w-screen h-[60vh] object-cover brightness-50"
          blurDataURL="/about 1.jpg"
        />
      </div>
      <div className=" h-[60vh] absolute top-0 bg-gradient-to-r from-primary to-red-400 "></div>
      <div className="absolute top-1/3 w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white content-center flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl text-center  font-serif mt-8 tracking-wide  ">
              About Us
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;