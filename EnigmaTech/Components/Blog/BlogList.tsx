import { bloges } from "@/data/bloges";
import React from "react";
import BlogCard from "../Cards/BLogCard";
import { BlogT, NewsT } from "@/type";
import Link from "next/link";

type blogProbs={
    blogs:BlogT[];
}
const Bloglist: React.FC<blogProbs> = ({ blogs }) => {
  return (
    <div>
        {/* <pre>{JSON.stringify(blogs, null, 2)}</pre> */}
      <div className="container mx-auto px-6 my-5">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3">
          {" "}
          {blogs.map((blog: BlogT) => (
           <Link href={`/blogs/${blog._id}`}> <BlogCard key={blog.title} blog={blog} /></Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bloglist;
