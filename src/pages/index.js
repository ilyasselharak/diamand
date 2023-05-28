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
  FcQuestions,
  FcHome,
} from "react-icons/fc";
import { MdCleaningServices } from "react-icons/md";

import Package from "@/components/Package";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-[80%] h-[300px] md:h-[500px] mx-auto mt-4 ">
        <div className="flex items-center justify-center text-md md:text-2xl font-serif font-bold">
          <Image
            alt="alt"
            className="w-[50px] md:w-[100px]"
            width={100}
            height={100}
            src={"/gem.gif"}
          />
          <span>WELCOME TO KRYSTAL CLEANING SERVICES</span>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-[210px] xl:h-[600px]  md:h-[500px] mt-2"
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

        <div className="font-bold text-sm md:text-xl text-center mt-2">
          We Will Clean Your House As Soon As Possible
        </div>
        <div className="flex gap-3 justify-center mt-3">
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-6 py-3 rounded-xl w-fit flex items-center gap-2">
            <FcCalendar /> Book Now
          </button>
          <a href={`tel:1-781-367-6258`}>
            <button className="bg-cyan-500 text-sm md: shadow-lg shadow-cyan-500/50 text-white px-6 py-3 rounded-xl w-fit flex items-center gap-2">
              <FcPhone />
              Call Now
            </button>
          </a>
        </div>
        <div className=" flex items-center text-xl md:text-4xl justify-center  mt-16 font-mono font-bold">
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

        <div className=" flex items-center text-xl gap-2 justify-center md:text-4xl mt-16 font-mono font-bold">
          <Image
            alt="alt"
            className="w-[50px] md:w-[50px]"
            width={100}
            height={100}
            src={"/Diamand.gif"}
          />
          Cleaning Plans
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-6">
          <Package title="Standard" price={90} houre="1.5 / 2" />

          <Package title="Deep" price={180} houre="2 / 3" />

          <Package title="Move In/Out" price={260} houre="3" />

          <div className="flip-card ">
            <div className="w-full h-full text-center rounded-xl">
              <div className="flip-card-front rounded-xl bg-cyan-500 text-white">
                <div className="flex h-[90%] justify-between flex-col">
                  <div className="text-2xl border-b font-mono font-bold text-black border-gray-400 p-4">
                    OFFICE
                  </div>

                  <div className="text-2xl flex items-center justify-center mt-4 font-medium ">
                    With Appointment
                  </div>
                  <div className="text-white cursor-pointer sm:mt-4 bg-green-400    py-2 px-5 rounded-md mx-auto">
                    <a
                      href={`tel:1-781-367-6258`}
                      className=" flex items-center gap-1 w-fit"
                    >
                      <FcPhone />
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-4xl font-bold flex font-mono justify-center items-center mt-16">
          <FcQuestions />
          How it works
        </div>
        <div className="flex gap-16 text-6xl text-center flex-wrap justify-center mt-8">
          <div className="w-1/4">
            <FcHome className="mx-auto" />
            <div className="text-green-500 text-xl mt-4">First Step</div>
            <div className="text-sm">
              Select size of home and what need to clean
            </div>
          </div>
          <div className="w-1/4">
            <MdCleaningServices className="mx-auto" />
            <div className="text-green-500 text-xl mt-4">Second Step</div>
            <div className="text-sm">
              Select the level of cleanliness your home is in
            </div>
          </div>
          <div className="w-1/4">
            <FcCalendar className="mx-auto" />
            <div className="text-green-500 text-xl mt-4">Third Step</div>
            <div className="text-sm">
              Schedule your preferred time or ask us
            </div>
          </div>
        </div>
        <div className="text-4xl font-bold flex font-mono justify-center items-center mt-16">
          FAQ
        </div>
        <div>
          Can I Cancel The Booking ?
          <div>
            if you cancel before 24 hour
          </div>
        </div>

        <div className="h-[500px]"></div>
      </main>

      <Footer />
    </>
  );
}
