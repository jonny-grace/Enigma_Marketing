import { AtIcon } from "@/assets/Icons/AtIcon";
import React from "react";

const CallToAction = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-8 text-white px-5">
      <div className="flex flex-col items-center justify-center w-full h-full my-auto text-center">
        <h2 className="w-full mb-4 text-4xl font-extrabold leading-tight text-dark-grey-900">
          Transform your business with our web solutions
        </h2>
        <p className="mb-10 text-lg font-normal lg:w-6/12 text-grey-700">
          Our experienced team is ready to create a custom website to boost your
          online presence and sales. Start your digital transformation journey
          now!
        </p>
        <div className="flex flex-col items-center justify-center w-full gap-4 mb-4 md:flex-row">
          <div className="relative flex items-center">
            <span className="absolute ml-3">
              <AtIcon />
            </span>
            <input
              type="search"
              placeholder="E-mail address"
              className="flex items-center py-2 pl-10 pr-3 text-sm font-medium border border-solid outline-none grow placeholder:text-dark-grey-500 placeholder:text-sm placeholder:font-medium border-grey-500 focus:border-grey-600 text-dark-grey-900 rounded-xl"
            ></input>
          </div>
          <button className="bg-primary flex items-center px-4 py-2 text-sm font-bold text-white border rounded-xl border-purple-blue-500 bg-purple-blue-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300">
            Get started now !
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
