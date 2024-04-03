import FadeInDown from "@/Common/Animations/FadeInDown";
import FadeInUp from "@/Common/Animations/FadeInUp";
import FadeOut from "@/Common/Animations/FadeOut";
import HeaderTitle from "@/Common/HeaderTitle";
import { LocationIcon } from "@/assets/Icons/locationIcon";
import { projects } from "@/assets/data/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolios = () => {
  return (
    <div id="portfolios">
      <FadeInDown>
        <HeaderTitle titleOne="Our" titleTwo="Portfolios" />
      </FadeInDown>

      <div className="container max-w-7xl mx-auto px-5 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 h-full">
          {projects.map((project) => (
            <FadeOut key={project.id}>
              <div className="bg-white  shadow-lg h-full text-gray-600">
                <div className="p-5 bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={1000}
                    width={1000}
                    className="h-64 object-fill rounded-sm"
                  />
                </div>
                <div className="flex justify-between mt-5 container px-5">
                  <div className="">
                    <Link
                      href={project.link}
                      className="underline underline-offset-4"
                      target="_blank"
                    >
                      {project.title}
                    </Link>
                  </div>
                  <div>
                    <h1 className="border-[1px] border-gray-600 rounded-full px-3 py-1  text-sm">
                      {project.year}
                    </h1>
                  </div>
                </div>
                <div className="text-sm px-5 pb-6 flex items-center gap-x-1 ">
                  <LocationIcon />
                  <p className="">{project.location}</p>
                </div>
              </div>
            </FadeOut>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
