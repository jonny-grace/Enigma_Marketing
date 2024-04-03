import Image from "next/image";
import React from "react";
import { stacks } from "@/data/data";
import HeaderTitle from "@/Common/HeaderTitle";
import Pulse from "@/Common/Animations/Pulse";
const TechnologyStacks = () => {
  return (
    <>
      <HeaderTitle titleOne="Technology" titleTwo="Stacks" />

      <div className="container max-w-7xl mx-auto px-5 sm:px-2 mt-5 py-5">
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-8 mt-16">
          {stacks.map((stack, index) => (
            <Pulse key={index}>
              <div className="grid justify-items-center hover:scale-125 translate-all ease-in-out duration-200 delay-200">
                <div className="h-16 w-16 rounded-full p-2 shadow-lg shadow-primary flex justify-center items-center">
                  <Image
                    src={stack.image}
                    alt={stack.name}
                    width={100}
                    height={200}
                    className="h-16 object-contain self-center"
                  />
                </div>
                <h1 className="text-center capitalize text-gray-800 text-lg mt-2 ">
                  {stack.name}
                </h1>
              </div>
            </Pulse>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechnologyStacks;
