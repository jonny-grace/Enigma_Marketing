'use client';
import FadeInDown from "@/Common/Animations/FadeInDown";
import FadeOut from "@/Common/Animations/FadeOut";
import HeaderTitle from "@/Common/HeaderTitle";
import React from "react";
import { usePathname} from 'next/navigation'
const AboutUs = () => {

  const path= usePathname();
  
  return (
    <div className="" id="about">
      {
        path != '/about' ?  <FadeInDown>
        <HeaderTitle titleOne="About" titleTwo="Us" />
      </FadeInDown> : null      }
     
      
        <h1></h1>
        <p  className={` ${path == '/about' && 'pt-16'} text-gray-800  max-w-4xl mx-auto  text-lg xll:max-w-6xl px-5`}>
        Enigma Marketing is a dynamic and innovative digital marketing agency specializing in helping businesses navigate and excel in the ever-evolving digital landscape. Founded with a passion for unraveling the mysteries of online marketing, we pride ourselves on our ability to decode complex algorithms, trends, and consumer behaviors to craft effective strategies that drive results.
        </p>
        <div className={` ${path == '/about' && 'pt-7'} text-gray-800  max-w-4xl mx-auto  text-lg xll:max-w-6xl px-5`}>
          <h1 className=" font-bold">Our Mission:</h1>
          <p  >
          At Enigma Marketing, our mission is to demystify digital marketing for our clients and empower them to achieve their business objectives in the digital realm. We are committed to providing tailored and forward-thinking solutions that unlock opportunities, enhance brand visibility, and drive sustainable growth. By combining creativity, expertise, and data-driven insights, we aim to be the catalyst for our clients' success in the digital age.
        </p>
        </div>
      
    </div>
  );
};

export default AboutUs;
