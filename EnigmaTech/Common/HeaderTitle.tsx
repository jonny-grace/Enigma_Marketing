import Image from "next/image";
import Link from "next/link";
import React from "react";
type PropType = {
  titleOne: string;
  titleTwo: string;
};
const HeaderTitle: React.FC<PropType> = ({ titleOne, titleTwo }) => {
  return (
    <div className="container mx-auto px-5 sm:px-2 mt-16 py-5">
      <div className="flex flex-col justify-center items-center gap-5 pt-10">
        <h1 className=" text-gray-800 font-sans text-5xl font-medium ">
          {titleOne} <span className="text-primary">{titleTwo}</span>
        </h1>
         <Link href={'/'}><Image
          src="/enigmatech3.png"
          alt="spector"
          width={100}
          height={200}
          className=""
        /></Link> 
      </div>
    </div>
  );
};

export default HeaderTitle;
