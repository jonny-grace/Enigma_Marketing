"use client";
import Image from "next/image";
import React from "react";
import { useState, useRef, FormEvent } from "react";
import { notify } from "@/app/toast";
import { usePathname} from 'next/navigation'
import { BlogT } from "@/type";

type BlogDetailProps = {
    blogDetail: BlogT;
  }
const BlogDetail: React.FC<BlogDetailProps> = ({ blogDetail })=>{

    const {title,description,imageUrl}= blogDetail;
    const [loading, setLoading] = useState(false);

  const path= usePathname();
  // Specify the type for the ref
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(true);
      notify("email sent successfully", "success");
    }, 2000);

   
  };
  return (
    <div>
        
        <div className="flex  justify-between px-4 mx-auto max-w-screen-xl ">

<article className="mx-auto w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
<section className=" container mx-auto flex flex-col  ">
  
<header className="mb-4 lg:mb-6   ">
      <address className="flex items-center mb-6 not-italic">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              <Image className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" width={1000} height={1000}/>
              <div>
                  <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Dawit Diriba</a>
                  <p className="text-base text-gray-500 dark:text-gray-400"> Digital Marketing Expert</p>
              </div>
          </div>
      </address>
      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{title}</h1>
  </header>
  <div className="hidden h-[60vh] md:flex">
    <Image
      src={`http://127.0.0.1:3000/${imageUrl}`}
      alt="spector"
      width={2000}
      height={2000}
      className="text-center h-[60vh]  w-full object-cover  pointer-events-none select-none"
    />
  </div>
  {/* <ReactMarkdown>{caseStudyDetails.overview}</ReactMarkdown> */}
  <div className="blog-description-container max-w-6xl p-4">
<p>
    {description}
</p>

<h3 className="text-xl font-bold mb-2">
Discover the Art and Science Behind Effective Digital Marketing Campaigns
</h3>
<p className="mb-4">
Unravel the intricacies of social media strategies, search engine optimization (SEO), content marketing,
email campaigns, and more. Stay ahead of the curve with insights into emerging technologies like artificial
intelligence, augmented reality, and data analytics, and learn how these advancements are reshaping the way
brands communicate and engage with their target audience.
</p>

<h3 className="text-xl font-bold mb-2">
Navigate the Complexities of Consumer Behavior in the Digital Age
</h3>
<p className="mb-4">
Gain valuable insights into user experience, personalized marketing, and the importance of building
authentic connections. Our blog is your go-to resource for staying informed about the ever-changing
algorithms of major platforms, ensuring that your marketing efforts remain both relevant and impactful.
</p>

{/* Add more sections as needed */}

<h3 className="text-xl font-bold mb-2">Join Us on a Journey of Exploration and Empowerment</h3>
<p className="mb-4">
Explore success stories, case studies, and real-world examples that showcase the transformative power
of effective digital marketing. Whether you're a seasoned marketing professional or a budding entrepreneur,
our blog is designed to empower you with the knowledge and tools necessary to navigate the intricacies of
the digital landscape with confidence.
</p>

<p className="mb-4">
Today's Digital Marketing is not just a blog; it's your roadmap to conquering the digital frontier and
unlocking the full potential of your online presence. Stay informed, stay inspired, and stay ahead in the
fast-paced world of digital marketing with our in-depth articles, expert interviews, and actionable insights.
Welcome to the future of marketing—where innovation meets impact!
</p>
</div>
</section>
</article>
</div>
    </div>
  )
}

export default BlogDetail