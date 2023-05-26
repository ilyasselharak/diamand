import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import {
  FcConferenceCall,
  FcBriefcase,
  FcCalendar,
  FcPhone,
  FcOk,
} from "react-icons/fc";

import "swiper/css/pagination";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div></div>
      <main className="w-[80%] h-[300px] md:h-[500px] mx-auto mt-4 ">
        <div className="flex items-center justify-center text-xl md:text-3xl font-serif font-bold">
          <Image
            alt="alt"
            className="w-[50px] md:w-[100px]"
            width={100}
            height={100}
            src={"/gem.gif"}
          />
          <span className="text-md"> WELCOME TO KRYSTAL CLEANING SERVICES</span>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-[250px] xl:h-[600px]  md:h-[500px] mt-2"
        >
          <SwiperSlide>
            <Image
              alt={"homeclean"}
              src={"/Toilet.jpg"}
              className="rounded-2xl"
              fill={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt={"homeclean"}
              className="rounded-2xl"
              src={"/home.jpg"}
              fill={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt={"kithchen"}
              className="rounded-2xl"
              src={"/kitchen.jpg"}
              fill={true}
            />
          </SwiperSlide>
        </Swiper>
        <div className="font-bold text-md md:text-xl text-center mt-2">
          We Will Clean Your House As Soon As Possible
        </div>
        <div className="flex gap-3 justify-center mt-3">
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-6 py-3 rounded-xl flex items-center gap-2">
            <FcCalendar /> Book Now
          </button>
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-6 py-3 rounded-xl flex items-center gap-2">
            <FcPhone />
            Call Now
          </button>
        </div>
        <div className=" flex items-center justify-center text-3xl mt-16 font-mono font-bold">
          <Image
            alt="alt"
            className="w-[50px] md:w-[100px]"
            width={100}
            height={100}
            src={"/gemEx.gif"}
          />
          Our Experience
        </div>
        <div className="flex flex-wrap font-bold  gap-3 md:gap-16 mt-12 text-2xl md:text-6xl justify-center">
          <div className=" w-[250px] md:w-[350px] flex gap-2 flex-col items-center bg-cyan-100 p-8">
            <FcConferenceCall />
            <div className=" text-green-500 font-bold">30</div>
            <div className="text-sm md:text-xl md:mt-6 text-gray-700 font-mono">
              Our Customers
            </div>
          </div>
          <div className="w-[250px]  md:w-[350px] flex gap-2 flex-col items-center bg-cyan-100 p-8">
            <FcBriefcase />
            <div className=" text-green-500 font-bold">4 Years</div>
            <div className="text-sm md:text-xl md:mt-6 text-gray-700 font-mono">
              Years Of Work
            </div>
          </div>
          <div className="w-[250px]  md:w-[350px] flex gap-2 flex-col items-center bg-cyan-100 p-8">
            <FcOk />
            <div className=" text-green-500 font-bold">99%</div>
            <div className="text-sm md:text-xl md:mt-6 text-gray-700 font-mono">
              Customer Satisfaction
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center">
            <Image
              alt="alt"
              className="w-[200px] md:w-[300px] md:h-[400px] rounded-md"
              width={200}
              height={400}
              src={"/video.gif"}
            />
          </div>
          <div className="md:text-start text-center">
            KRYSTAL Cleaning Experience
            <div></div>
          </div>
        </div>

        <div className=" flex items-center gap-2 justify-center text-3xl mt-16 font-mono font-bold">
          <Image
            alt="alt"
            className="w-[50px] md:w-[50px]"
            width={100}
            height={100}
            src={"/Diamand.gif"}
          />
          Cleaning Plans
        </div>

        <div className="h-[500px]"></div>
      </main>

      <Footer />
    </>
  );
}
