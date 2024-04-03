import Image from "next/image";
import Link from "next/link";
import React from "react";

type propsType = {
    image:string,
    title: string
}

const Banner :React.FC<propsType> = ({image,title}) => {
  return (
    <div className="overflow-x-hidden">
      <div className=" h-[25vh] md:h-[60vh] w-screen relative">
        <Image
        //   src="/about 1.jpg"
        src={image}

          alt="spector"
          fill
          className="w-screen h-[25vh] md:h-[60vh] object-cover brightness-50"
          blurDataURL="/about 1.jpg"
        />
      </div>
      <div className=" h-[60vh] absolute bg-gradient-to-t"></div>
      <div className="absolute top-1/4 md:top-1/3 w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white content-center flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl text-center  font-serif mt-8 tracking-wide  ">
             {title}
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;