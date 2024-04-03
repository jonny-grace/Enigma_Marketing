"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { bloges } from "@/data/bloges";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import { News, Newses } from "@/data/types";
import { BlogT, NewsT } from "@/type";
import BlogCard from "../Cards/BLogCard";
import Link from "next/link";

type blogProbs={
  blogs:BlogT[];
}
const BlogList: React.FC<blogProbs> = ({ blogs }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <>
        <section className="mt-32">
          <h1 className="font-extrabold font-sans text-3xl text-center">
            LATEST NEWS
          </h1>
          <h3 className="text-gray-700 font-mono text-center mt-3">
            Luxury AutoStar Rental Services
          </h3>
        </section>
  
        <div className="container mx-auto px-6">
          <Slider {...settings}>
            {blogs.map((blog: BlogT) => (
           <Link href={`/blogs/${blog._id}`}>   <BlogCard key={blog.title} blog={blog} /></Link>
            ))}
          </Slider>
        </div>
      </>
    );
  };
  
  export default BlogList;