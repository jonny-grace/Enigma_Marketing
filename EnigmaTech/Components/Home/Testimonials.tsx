"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component, ReactNode } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { testimonials } from "@/assets/data/testimonials";
import HeaderTitle from "@/Common/HeaderTitle";
import FadeInDown from "@/Common/Animations/FadeInDown";
import FadeOut from "@/Common/Animations/FadeOut";
export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      cssEase: "linear",
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
    const styles2 = {
      backgroundImage: `url('/banner2.jpg')`,
      backgroundSize: "cover",
    };

    return (
      <div>
        <div className="bg-fixed bg-cover bg-center pb-7 container mx-auto max-w-7xl ">
          <div className="flex flex-col justify-center items-center gap-5 pt-16 ">
            <FadeInDown>
              <HeaderTitle titleOne="Client" titleTwo="TESTIMONIALS" />
            </FadeInDown>

            {/* <h1 className="text-center text-4xl sm:text-6xl text-white font-black capitalize tracking-wider">
              TESTIMONIALS
            </h1> */}
          </div>
          {/* <div className="flex justify-center">
            <Image
              src="/logoOnly.png"
              height={1000}
              width={1000}
              alt="logo image"
              className="h-14 w-14 object-contain self-center text-orange-800 my-2"
            />
          </div> */}
          <div className="container mx-auto px-6 mt-10">
            <FadeOut>
              <Slider {...settings}>
                {testimonials.map((data, index) => (
                  <div key={index}>
                    <div className="p-3 grid bg-primary h-96 mx-3 rounded-lg opacity-90">
                      <div className="text-yellow-400 flex items-start text-sm">
                        {[1, 2, 3, 4, 5].map((item, key) => (
                          <StarRateIcon fontSize="small" key={index} />
                        ))}
                      </div>

                      <p className="text-gray-200 text-sm  text-start mt-1 tracking-wide items-center font-sans">
                        {data.testimonial}
                      </p>
                      <div className="flex gap-3 justify-start items-end mt-2 align-bottom ">
                        <div className="w-max">
                          <Image
                            src={`${data.image}`}
                            alt="spector"
                            width={100}
                            height={200}
                            className="h-14 w-14 rounded-full pointer-events-none select-none "
                          />
                        </div>
                        <div>
                          <h1 className="text-gray-100 tracking-wider font-sans mt-5 text-md">
                            {data.name}
                          </h1>
                          <h1 className="text-gray-100 text-sm">
                            {data.occupation}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </FadeOut>
          </div>
        </div>
      </div>
    );
  }
}
