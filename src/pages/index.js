import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import { FcCalendar, FcPhone, FcQuestions, FcHome } from "react-icons/fc";
import { BiFridge, BiCabinet } from "react-icons/bi";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { MdCleaningServices } from "react-icons/md";
import { TbWindow, TbMicrowave, TbStairs } from "react-icons/tb";
import { GiBrickWall, GiWashingMachine, GiMirrorMirror } from "react-icons/gi";

import Package from "@/components/Package";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [refund, setRefund] = useState(false);
  const [pet, setPet] = useState(false);
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
          <button className="bg-[#a1be3a] shadow-lg shadow-cyan-500/50 text-white px-6 py-3 rounded-xl w-fit flex items-center gap-2">
            <FcCalendar /> Book Now
          </button>
          <a href={`tel:1-781-367-6258`}>
            <button className="bg-[#a1be3a] text-sm md: shadow-lg shadow-cyan-500/50 text-white px-6 py-3 rounded-xl w-fit flex items-center gap-2">
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
          <div>
            {" "}
            <span className="text-green-400">OUR</span> SERVICES
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-6 mt-16">
          <span className="flex  items-center  md:text-2xl gap-1">
            <BiFridge /> <span className="text-green-500">Clean</span>
            Fridge
          </span>
          <span className="flex items-center  md:text-2xl gap-1">
            <TbWindow /> <span className="text-green-500">Clean</span> Windows
          </span>
          <span className="flex items-center md:text-2xl gap-1">
            <GiBrickWall /> <span className="text-green-500">Clean</span> Walls
          </span>
          <span className="flex items-center  md:text-2xl gap-1">
            <GiWashingMachine /> <span className="text-green-500">Clean</span>{" "}
            Laundry
          </span>
          <span className="flex items-center  md:text-2xl gap-1">
            <BiCabinet /> <span className="text-green-500">Clean</span> Cabinets
          </span>
          <span className="flex items-center  md:text-2xl gap-1">
            <TbMicrowave /> <span className="text-green-500">Clean</span>
            Microwave
          </span>
          <span className="flex items-center  md:text-2xl gap-1">
            <TbStairs /> <span className="text-green-500">Clean</span> Stairs
          </span>
          <span className="flex items-center  md:text-2xl gap-1">
            <GiMirrorMirror /> <span className="text-green-500">Clean</span>{" "}
            Mirror
          </span>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 relative ">
          <Image src={"/slide.jpg"} fill priority className="z-[-1]" />
          <div className="flex justify-center md:p-20 pt-4">
            <Image
              alt="alt"
              className="w-[200px] md:w-[300px] md:h-[400px] rounded-md"
              width={200}
              height={400}
              src={"/video.gif"}
            />
          </div>
          <div className="md:text-start text-center md:p-20 p-4 text-md font-bold md:text-xl">
            KRYSTAL Cleaning Experience
            <div className="p-0 font-normal">
              <p className="mt-4">
                Connecting communities and cultures with families and
                individuals alike through one mission. Delivering the best
                cleans and products to any home.
              </p>
              <p className="mt-4">
                <span className="font-font">Community, Culture, Kindness.</span>{" "}
                Our three core values match our one mission. Delivering the best
                KRYSTAL cleaning specialists, creating the best KRYSTAL cleaning
                products to every family and home, creating a service based
                around honesty and reliability.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex items-center text-xl gap-2 justify-center md:text-4xl mt-16 font-mono font-bold">
          Cleaning Plans
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-16">
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
        <div className=" text-xl md:text-4xl font-bold flex font-mono justify-center items-center mt-16">
          <FcQuestions />
          How it works
        </div>
        <div className="flex gap-16 text-6xl text-center flex-wrap justify-center mt-8">
          <div className="md:w-1/4 w-2/4">
            <FcHome className="mx-auto" />
            <div className="text-green-500 text-xl mt-4">First Step</div>
            <div className="text-sm">
              Select size of home and what need to clean
            </div>
          </div>
          <div className="md:w-1/4 w-2/4">
            <MdCleaningServices className="mx-auto" />
            <div className="text-green-500 text-xl mt-4">Second Step</div>
            <div className="text-sm">
              Select the level of cleanliness your home is in
            </div>
          </div>
          <div className="md:w-1/4 w-2/4">
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
        <div className="mt-8 flex flex-col gap-3">
          <div
            onClick={() => {
              setPet(!pet);
            }}
            className="bg-white shadow-myShadow p-4 font-medium flex justify-between items-center"
          >
            I have a pet can i leave it in home ?
            <AiFillCaretDown />
          </div>
          <div
            className={`${
              pet ? "" : "hidden"
            } bg-white shadow-lg p-4 flex flex-col gap-2`}
          >
            <p>
              we recommend to put it somewhere like a separate room while we are
              there
            </p>
            <p>
              the pit make sound nice because it is a part of the family but we
              have some don't like noise or may want to play.
            </p>
          </div>
          <div
            onClick={() => {
              setRefund(!refund);
            }}
            className="bg-white shadow-myShadow p-4 font-medium flex justify-between items-center"
          >
            Can I Cancel The Booking and Refund Money ?
            <AiFillCaretDown />
          </div>
          <div
            className={`${
              refund ? "" : "hidden"
            } bg-white shadow-lg p-4 flex flex-col gap-2`}
          >
            <p>if 24h before appointment . non Refundable</p>
            <p>
              if 48h before appointment you can get a credit so you can used
              next time
            </p>
            <p>if Before 48H you can get full refund back</p>
          </div>
        </div>

        <div className="h-[500px]"></div>
      </main>

      <Footer />
    </>
  );
}
