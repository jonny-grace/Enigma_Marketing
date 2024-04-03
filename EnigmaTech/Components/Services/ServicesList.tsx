import React from 'react'
import { services } from "@/data/data";
import Image from 'next/image';

import Link from 'next/link';
import { ServiceT } from '@/type';

type propsType = {
    isHome?: boolean |null;
}
type serviceProps = {
  serviceslist:ServiceT[];
}
type ServicesListProps = propsType & serviceProps;

const ServicesList:React.FC<ServicesListProps>=({isHome,serviceslist})=> {
  
    const slicedService = isHome ? serviceslist.slice(0,3) : serviceslist
    
  return (

    <div>

  <div className=' container mx-auto max-w-5xl px-5 md:px-0'><p className="text-center text-lg font-medium mt-10">
    At <span className="text-primary">WanderWeb</span>, we offer a
    comprehensive suite of web development services, including:
  </p></div>
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-8 gap-y-16 my-8">
   
    {  slicedService.map((service, index) => (
      <Link href={`/services/${service._id}`} key={index}>
        <div className="px-5 py-12 shadow-lg rounded-lg ">
          <div className="flex gap-2 h-16 items-center">
            <Image
               src={`http://127.0.0.1:3000/${service.imageUrl}`}
              alt="spector"
              width={100}
              height={200}
              className="h-14 object-contain"
            />
            <h1 className="text-xl text-primary font-medium mb-3">
              {service.title}
            </h1>
          </div>
          <p className="text-gray-700 mt-3">{service.description.slice(0,150)}<Link href={`/services/${service._id}`}>...</Link></p>
        </div>
      </Link>
    ))}
  </section>
  </div>
  )
}

export default ServicesList