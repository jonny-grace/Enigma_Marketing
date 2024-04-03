import AboutUs from "@/Components/Home/AboutUs";
import CallToAction from "@/Components/Home/CallToAction";
import ContactUs from "@/Components/Home/ContactUs";
import Hero from "@/Components/Home/Hero";
import Portfolios from "@/Components/Home/Portfolios";
import Services from "@/Components/Home/Services";
import TeamMembers from "@/Components/AboutUs/TeamMembers";
import TechnologyStacks from "@/Components/Home/TechnologyStacks";
import Testimonials from "@/Components/Home/Testimonials";
import WellcomeMessages from "@/Components/Home/WellcomeMessages";
import BlogList from "@/Components/Home/Bloglist";
import { getAllBlogs } from "@/services/blogs";

export default async function Home() {
  const blogs =await getAllBlogs();
  return (
    <main>
      <Hero />
      <WellcomeMessages />
      <AboutUs />
      <Services />
      {/* <TechnologyStacks /> */}
      {/* <Portfolios /> */}
      <Testimonials />
      <ContactUs />
      {/* <TeamMembers /> */}
      {/* <CallToAction /> */}
      <BlogList blogs={blogs}/>
    </main>
  );
}
