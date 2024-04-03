import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "@/public/hero1.svg";
import { MotionDiv } from "@/Common/MotionDiv";

const Hero = async () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <div
        className="h-[50vh] md:h-[80vh] relative xl:max-h-[80vh] xll:max-h-[60vh] "
        id=""
      >
        <div className="absolute h-full top-0 w-full flex px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
            <div className="flex flex-col justify-center items-start w-full">
              <div className="grid ">
                <div className="align-middle sm:pl-8">
                  <MotionDiv
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      delay: 0.1,
                      ease: "easeInOut",
                      duration: 0.1,
                    }}
                    viewport={{ amount: 0 }}
                    className="max-w-sm rounded relative w-full"
                  >
                    <h1 className="text-4xl  xl:text-6xl  xxl:text-7xl font-extrabold text-gray-800">
                      Wander <span className="text-primary">Web</span>
                    </h1>
                  </MotionDiv>

                  <MotionDiv
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      delay: 0.2,
                      ease: "easeInOut",
                      duration: 0.2,
                    }}
                    viewport={{ amount: 0 }}
                    className="rounded relative w-full"
                  >
                    <p className="text-lg mt-8 xxl:text-xl max-w-[550px] text-gray-600">
                      Welcome to <span className="text-primary">WanderWeb</span>
                      , where exceptional web development meets creative
                      innovation. Transform your digital presence with our
                      cutting-edge solutions tailored to elevate your brand and
                      captivate your audience.
                    </p>
                  </MotionDiv>
                </div>
                <div className="mt-5 align-bottom h-full flex items-end sm:pl-8">
                  <div className="grid sm:flex gap-x-5 gap-y-2 font-semibold">
                    <MotionDiv
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        delay: 0.2,
                        ease: "easeInOut",
                        duration: 0.2,
                      }}
                      viewport={{ amount: 0 }}
                      className="rounded relative w-full"
                    >
                      <Link
                        href="#contact-us"
                        className="bg-primary text-white h-12 w-48 xxl:h-16 rounded-full flex justify-center items-center tracking-wide text-lg"
                      >
                        Get intouch
                      </Link>
                    </MotionDiv>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex w-full py-5 md:justify-center  items-center ">
              <div className="w-max pl-8 flex md:grid md:align-end pr-8 gap-2 md:justify-center">
                <MotionDiv
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: 0.15,
                    ease: "anticipate",
                    duration: 0.15,
                  }}
                  viewport={{ amount: 0 }}
                  className="max-w-sm rounded relative w-full"
                >
                  <Image
                    src="/hero2.jpg"
                    height={1000}
                    width={1000}
                    alt="hero image"
                    className="h-96 w-full object-contain"
                  />
                </MotionDiv>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
