import HeaderTitle from "@/Common/HeaderTitle";
import SocialMeadiaLinks from "@/Common/SocoialMeadiaLinks";
import Image from "next/image";
import React from "react";
const TeamMembers = () => {
  return (
    <>
      <HeaderTitle titleOne="EXPERIENCED" titleTwo="TEAM" />

      <div className="bg-bgThird mt-15 pb-5 max-w-7xl mx-auto">
        <div className="grid sm:flex sm:flex-row justify-evenly mt-5">
          <div className="p-3 grid items-center  w-96">
            <div className="grid sm:flex sm:flex-row justify-evenly mt-5 px-5">
              <div className="group relative max-w-96">
                <Image
                  src="/dev3.jpg"
                  height={300}
                  width={200}
                  alt="Kasuman"
                  className="w-full rounded-lg object-cover h-96"
                />
                <div className="absolute top-0 left-0  w-full h-0 flex flex-col justify-center items-center bg-primary opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
                  <SocialMeadiaLinks />
                </div>
              </div>
            </div>
            <div className="px-7 flex flex-col gap-2">
              <h1 className="text-primary  tracking-wider font-sans mt-5 text-3xl font-medium">
                David Joe
              </h1>
              <h1 className="text-gray-800 text-lg  font-sans tracking-wider font-medium">
                CEO
              </h1>
              <p className="text-gray-700 text-start tracking-wide">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </p>
            </div>
          </div>
          <div className="p-3 grid items-center w-96">
            <div className="grid sm:flex sm:flex-row justify-evenly mt-5 px-5">
              <div className="group relative max-w-96">
                <Image
                  src="/dev2.jpg"
                  height={300}
                  width={200}
                  alt="girmesh"
                  className="w-full rounded-lg object-cover h-96"
                />
                <div className="absolute top-0 left-0  w-full h-0 flex flex-col justify-center items-center bg-primary opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
                  <SocialMeadiaLinks />
                </div>
              </div>
            </div>
            <div className="px-7 flex flex-col gap-2">
              <h1 className="text-primary  tracking-wider font-sans mt-5 text-3xl font-medium">
                Jonaten Den
              </h1>
              <h1 className="text-gray-800 text-lg  font-sans tracking-wider font-medium">
                Markating Manger
              </h1>
              <p className="text-gray-700 text-start tracking-wide">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </p>
            </div>
          </div>
          <div className="p-3 grid items-center w-96">
            <div className="grid sm:flex sm:flex-row justify-evenly mt-5 px-5">
              <div className="group relative max-w-96">
                <Image
                  src="/developer1.jpg"
                  height={300}
                  width={200}
                  alt="gite"
                  className="w-full rounded-lg object-cover h-96"
                />
                <div className="absolute top-0 left-0  w-full h-0 flex flex-col justify-center items-center bg-primary opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
                  <SocialMeadiaLinks />
                </div>
              </div>
            </div>
            <div className="px-7 flex flex-col gap-2">
              <h1 className="text-primary  tracking-wider font-sans mt-5 text-3xl font-medium">
                Kate Sopy
              </h1>
              <h1 className="text-gray-800 text-lg  font-sans tracking-wider font-medium">
                Project Manager
              </h1>
              <p className="text-gray-700 text-start tracking-wide">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
