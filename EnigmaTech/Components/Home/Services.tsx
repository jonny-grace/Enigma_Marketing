import React from "react";
import HeaderTitle from "@/Common/HeaderTitle";
import FadeInDown from "@/Common/Animations/FadeInDown";
import ServicesList from "../Services/ServicesList";
import { getAllServices } from "@/services/services";


const Services = async () => {
  const services = await getAllServices()


  return (
    <div id="services">
      <FadeInDown>
        <HeaderTitle titleOne="Our" titleTwo="Services" />
      </FadeInDown>
      <div className="container mx-auto max-w-7xl px-5 sm:px-2 mt-5 ">
          
       <ServicesList serviceslist={services} isHome={true}/>
        
      </div>
    </div>
  );
};

export default Services;
