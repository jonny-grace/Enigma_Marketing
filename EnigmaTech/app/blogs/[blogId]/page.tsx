import React from "react";

import { getBlogById } from "@/services/blogs"
import BlogDetail from "@/Components/Blog/BlogDetail";



export default async function Page({ params }: { params: { blogId: string } }) {
    
    const singleBlog= await getBlogById(params.blogId)
  

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24  dark:bg-gray-900 antialiased">
        
        <BlogDetail blogDetail={singleBlog}/>

      </main>
   
  );
};


