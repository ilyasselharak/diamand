import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { findAllQuestions } from "./api/frequently";
import { findAllContent } from "./api/home";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import { FcCalendar, FcPhone, FcQuestions, FcHome } from "react-icons/fc";
import { BiFridge, BiCabinet } from "react-icons/bi";

import { MdCleaningServices } from "react-icons/md";
import { TbWindow, TbMicrowave, TbStairs } from "react-icons/tb";
import { GiBrickWall, GiWashingMachine, GiMirrorMirror } from "react-icons/gi";

import Package from "@/components/Package";
import HomeFoter from "@/components/HomeFoter";
import Script from "next/script";
import Link from "next/link";
import { initMongoose } from "@/lib/mongoose";
import Faq from "@/components/Faq";

type Props = {
  _id: string;
  title: string;
  content: string;
};
export default function Home({ faq, info }: any) {
  console.log(info);
  return (
    <>
      <Header />

      <main className="mt-4 font-mono">
        <div className="w-[80%] mx-auto">
          <div className="text-center text-md md:text-2xl font-serif font-bold">
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
            className="h-[210px] xl:h-[500px] md:h-[350px] mt-3"
          >
            <SwiperSlide>
              <Image
                alt="homeClean"
                src={"/Toilet.jpg"}
                className="rounded-2xl"
                fill={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="home"
                className="rounded-2xl"
                src={"/home.jpg"}
                fill={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="kitchen"
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
            <Link
              href={"/Booking/Standard"}
              className="bg-[#a1be3a] shadow-lg shadow-cyan-500/50 text-white px-6 py-3 rounded-xl w-fit flex items-center gap-2"
            >
              <FcCalendar /> Book Now
            </Link>
            <a href={`tel:1-781-367-6258`}>
              <button className="bg-[#a1be3a] text-sm  shadow-lg shadow-cyan-500/50 text-white px-6 py-3 rounded-xl w-fit flex items-center gap-2">
                <FcPhone />
                Call Now
              </button>
            </a>
          </div>
          <div className=" flex items-center text-xl md:text-4xl justify-center  mt-16 font-mono font-bold">
            <div>
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
              <GiBrickWall /> <span className="text-green-500">Clean</span>{" "}
              Walls
            </span>
            <span className="flex items-center  md:text-2xl gap-1">
              <GiWashingMachine /> <span className="text-green-500">Clean</span>{" "}
              Laundry
            </span>
            <span className="flex items-center  md:text-2xl gap-1">
              <BiCabinet /> <span className="text-green-500">Clean</span>{" "}
              Cabinets
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
            <Image
              alt={"slide background"}
              src={"/bg.jpg"}
              fill
              priority
              className="z-[-1]"
            />
            <div className="flex justify-center md:p-20 pt-4">
              <Image
                alt="short video"
                className="w-[200px] md:w-[300px] md:h-[400px] rounded-md"
                width={200}
                height={400}
                src={"/video.gif"}
              />
            </div>
            {info.map((item: any) => (
              <div className="md:text-start text-center md:p-20 p-4 text-md font-bold md:text-xl">
                {item.slide1.title}
                <div className="p-0 font-normal">
                  <p className="mt-4">{item.slide1.paragraph}</p>
                </div>
              </div>
            ))}
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
          <div className=" flex items-center text-xl gap-2 justify-center md:text-4xl mt-16 font-mono font-bold">
            Cleaning Plans
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 mt-16">
            <Package title="Standard" price={90} houre="1.5 / 2" />

            <Package title="Deep" price={180} houre="2 / 3" />

            <Package title="Move-In-Out" price={260} houre="3" />

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
            FAQ
          </div>
          <div className="mt-8 flex flex-col gap-3">
            {faq.map((item: Props) => (
              <Faq key={item._id} title={item.title} content={item.content} />
            ))}
          </div>
          <div
            id="contact"
            className="text-4xl font-bold flex font-mono justify-center items-center mt-16"
          >
            Contact Us
          </div>
          <div className="flex gap-4 mx-auto mt-16 flex-col w-[90%] md:w-[66%]">
            <div className="w-full">
              <label>Name</label>
              <div>
                <input
                  className="w-full border border-gray-400 p-3 mt-2"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="w-full">
              <label>Email</label>
              <div>
                <input
                  className="w-full border border-gray-400 p-3 mt-2"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="w-full">
              <label>Phone</label>
              <div>
                <input
                  type="tel"
                  className="w-full border border-gray-400 p-3 mt-2"
                  placeholder="Your Phone"
                />
              </div>
            </div>
            <div className="w-full">
              <label>Message</label>
              <div>
                <textarea
                  className="w-full border border-gray-400 p-2 pb-8 mt-2"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <p>
              By entering any information, you affirm you have read and agree to
              the Terms of Service and Privacy Policy.
            </p>
            <button className="p-4 bg-green-400 mb-20 rounded-md text-white font-bold text-xl">
              Send
            </button>
          </div>
        </div>
        <HomeFoter />
        <Script
          src="//code.tidio.co/cknjplhesnbsxez5y1idm3dsw6p4ihsu.js"
          async
        ></Script>
      </main>

      <Footer />
    </>
  );
}
export async function getServerSideProps() {
  await initMongoose();
  const questions = await findAllQuestions();
  const content = await findAllContent();

  return {
    props: {
      faq: JSON.parse(JSON.stringify(questions)),
      info: JSON.parse(JSON.stringify(content)),
    },
  };
}
