import React from "react";

import { getBlogById } from "@/services/blogs"
import BlogDetail from "@/Components/Blog/BlogDetail";
import ServiceDetails from "@/Components/Services/ServiceDetail";
import { getServiceById } from "@/services/services";



export default async function Page({ params }: { params: { serviceId: string } }) {
    
    const singleBlog= await getServiceById(params.serviceId)
  

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24  dark:bg-gray-900 antialiased">
        
        <ServiceDetails singleService={singleBlog}/>

      </main>
   
  );
};


