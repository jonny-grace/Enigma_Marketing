import Image from "next/image";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import { News } from "@/data/types";
import { BlogT, NewsT } from "@/type";
import Link from "next/link";
type Props = {
  data: NewsT;
};
type blogProps = {
  blog: BlogT;
};
type CombinedProps = Props & blogProps;
const BlogCard: React.FC<blogProps> = ({ blog}) => {
  return (
    <div className="p-5 grid my-5 items-center shadow-md justify-center ">
      {/* <pre>{JSON.stringify(blog, null, 2)}</pre> */}
      <Image
      src={`http://127.0.0.1:3000/${blog.imageUrl}`}
        height={1000}
        width={1000}
        alt="breakfast"
        className="w-full rounded-md object-cover h-80"
      />
      <div className="flex gap-3 items-end">
        <CalendarMonthIcon className="tex-sm text-red-600 mt-3" />
       
      </div>
      <h1 className="font-bold tracking-wide font-sans  text-lg hover:underline underline-offset-2">
        {blog.title}
      </h1>
      <p className="text-gray-800 text-sm font-mono mt-3">{blog.description.slice(0,100)} <Link href={`/blogs/${blog._id}`}>...</Link></p>
    </div>
  );
};

export default BlogCard;