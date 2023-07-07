import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { findAllQuestions } from "./api/frequently";
import { findAllContent } from "./api/home";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination } from "swiper";
import { FcCalendar, FcPhone, FcQuestions, FcHome } from "react-icons/fc";
import { AiOutlineArrowRight, AiOutlineLock } from "react-icons/ai";
import { BiCommentDetail, BiMenu } from "react-icons/bi";
import { TbWindow, TbMicrowave, TbStairs } from "react-icons/tb";
import { GiBrickWall, GiWashingMachine, GiMirrorMirror } from "react-icons/gi";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Package from "@/components/Package";
import HomeFoter from "@/components/HomeFoter";
import Script from "next/script";

import Head from "next/head";
import Link from "next/link";
import { useReducer, useState } from "react";
import axios from "axios";

export default function Home() {
  const [messages, setMessage] = useState("");
  const [menu, setMenu] = useState(false);
  type ValidationSchema = z.infer<typeof validationSchema>;
  const validationSchema = z.object({
    fname: z.string().min(1, { message: "Name is required" }),
    message: z.string().min(2, { message: "message is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),

    phone: z.string().min(5, { message: "phone must be at least 6 numbers" }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    mode: "onBlur",
    resolver: zodResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    axios.post("../api/contact", {
      firstName: data.fname,

      email: data.email,
      phone: data.phone,
      message: data.message,
    });
    setMessage("the message have been send");
  };

  return (
    <>
      <Head>
        <title>Krystal Cleaning Services | HOME</title>
        <meta
          name="title"
          content="Krystal Cleaning Services Pro - House Cleaning, Deep Cleaning"
        />
        <meta
          name="description"
          content="If you have your day to day cleaning under control, let us do the really dirty work. We provide deep clean services to reach the places you might have missed."
        />
      </Head>
      <header className="grid grid-cols-2 items-center justify-items-center">
        <div>
          <Image src={"/logo.png"} height={50} width={200} alt="logo" />
        </div>
        <div className="hidden gap-4 items-center  md:flex">
          <Link href={"/"}>How it Works</Link>
          <Link href={"/"}>Our Services</Link>
          <Link
            href={"/Booking/Standard"}
            className="bg-blue-400 rounded-sm px-4 py-2 border-blue-200 border-2 text-white"
          >
            Book a Cleaning
          </Link>
        </div>
        <div className="md:hidden text-4xl">
          <BiMenu onClick={() => setMenu(!menu)} />
        </div>
        <div className={`${menu ? "flex" : "hidden"} md:hidden gap-2 flex-col`}>
          <Link href={"/"}>How it Works</Link>
          <Link href={"/"}>Our Services</Link>
          <Link
            href={"/Booking/Standard"}
            className="bg-blue-400 rounded-sm px-4 py-2 mb-4 border-blue-200 border-2 text-white"
          >
            Book a Cleaning
          </Link>
        </div>
      </header>

      <main>
        <div className=" bg-[url('/home.jpg')] bg-center h-[760px] bg-cover text-white flex flex-col justify-center items-center gap-6">
          <div className="text-3xl font-bold md:text-6xl">
            Cleaning Made Easy
          </div>
          <div className="md:text-2xl text-md md:w-[50%] w-[90%] text-center">
            Book expert home cleaners at a moment's notice. Just pick a time and
            we’ll do the rest.
          </div>
          <div className="grid mt-4 grid-cols-1 gap-4 w-[85%] md:grid-cols-3 md:flex md:gap-0 md:justify-center">
            <input
              type="text"
              className="border border-gray-300 w-full md:w-[400px] px-2 h-[50px] md:h-[70px] py-2"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="border border-gray-300 w-full md:w-[100px] h-[50px] md:h-[70px] px-2 py-2"
              placeholder="Zip Code"
            />
            <input
              type="submit"
              className="bg-blue-400 px-4  py-2 md:w-[200px] w-full text-md md:text-2xl h-[70px]"
              value={"Continue"}
            />
          </div>
        </div>
        <div>
          <div className="mt-14 text-gray-600 text-center text-4xl font-bold">
            How It <span className="text-blue-300 underline">works</span>
            <div className=" font-normal text-sm mt-4 text-gray-400">
              We’ve made all the hardwork for making it simple for you. Here’s
              how it works
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 text-base w-[90%] mx-auto mt-14">
              <div className="flex flex-col items-center gap-3">
                <Image
                  alt="home"
                  width={100}
                  height={100}
                  src={"/assets/calendary.jpg"}
                />
                <div>
                  <div>Book a Cleaning</div>
                  <div className="font-normal text-gray-400">
                    Click the book now button to make a booking on your
                    preffered date and time
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Image
                  alt="home"
                  width={100}
                  height={100}
                  src={"/assets/lock.jpg"}
                />{" "}
                <div>
                  <div>Confirm Booking</div>
                  <div className="font-normal text-gray-400">
                    We will confirm your booking along with your instructions
                    via secure transaction.
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-center gap-3">
                <Image
                  alt="home"
                  width={100}
                  height={100}
                  src={"/assets/home.jpg"}
                />
                <div>
                  <div>We’ll Clean it</div>
                  <div className="font-normal text-gray-400">
                    Our trusted & experienced maid will come to your door-step
                    on the time for a cleaning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 text-center text-4xl font-bold text-gray-600  bg-gray-100 py-14">
          Don't take our <span className="text-blue-300 underline">word</span>
          <div className=" font-normal text-sm mt-4 text-gray-400">
            Read what our past customers said about our cleaning and services.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[90%] mx-auto justify-center text-base gap-x-5 mt-12">
            <div>
              <div className="flex items-center flex-col border-2 border-sky-400 px-4 py-8">
                <BiCommentDetail className="text-sky-400 text-4xl" />

                <div className="mt-4 text-gray-400 font-normal text-xl">
                  Patricia has been cleaning our house for several years and we
                  couldn't be happier with her. She is very meticulous and a
                  very hard worker and always leaves our house looking and
                  smelling fresh, clean and tidy. She is also a very good
                  communicator and always lets me know if there is ever going to
                  be an issue (which is rare) with her being late or if she has
                  to reschedule to a different day. I would highly recommend her
                  cleaning service to anyone.
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xl">Sandra</div>
                <div className="text-base font-normal">
                  Marketing Staff, New York
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center flex-col border-2 border-sky-400 px-4 py-8">
                <BiCommentDetail className="text-sky-400 text-4xl" />

                <div className="mt-4 text-gray-400 font-normal text-xl">
                  Patricia and her crews are amazing! They come biweekly to
                  clean our entire house top to bottom. It is like a spring
                  cleaning every other week! I would recommend Patricia and her
                  team to anyone looking for cleaning services
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xl">Jessica</div>
                <div className="text-base font-normal">
                  Photographer, New York
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center flex-col border-2 border-sky-400 px-4 py-8">
                <BiCommentDetail className="text-sky-400 text-4xl" />

                <div className="mt-4 text-gray-400 font-normal text-xl">
                  They did such a good job. Whether you want to give a unique
                  gift or have your own home cleaned, Maid for you provides a
                  large range of top-notch services that I highly recommend to
                  anyone.
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xl">Samantha</div>
                <div className="text-base font-normal">
                  Physical Therapist, Manhattan
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-sky-300 text-white text-6xl text-center py-10 font-[200]">
          Check out some of our{" "}
          <span className="border-b-2 border-white">services!</span>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[400px] md:h-fit">
              <Image src={"/Toilet.jpg"} fill alt={"img1"} />
            </div>
            <div className="p-8">
              <div className="text-4xl">
                Make Better{" "}
                <span className="text-blue-400 underline">Living room</span>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <div>Furniture dusting </div>
                <div>Vacuuming </div>
                <div>Fixtures cleaning </div>
                <div>Wall marks </div>
                <div>Floor mopping / wet&dry mop</div>
                <div>Carpet vacuuming</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-8 ml-[40%]">
              <div className="text-4xl">
                Your Beautiful{" "}
                <span className="text-blue-400 underline">Kitchen</span>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <div>DUST AND WIPE ALL REACHABLE SURFACES</div>
                <div>VACUUM AND MOP FLOORS </div>
                <div>WASH AND SCRUB SINK</div>
                <div>CLEAN BACK SPLASH </div>
                <div>EMPTY TRASH</div>
              </div>
            </div>
            <div className="relative h-[400px] ">
              <Image
                src={"/kitchen.jpg"}
                className="h-[400px] md:h-fit"
                fill
                alt={"img1"}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[400px] ">
              <Image
                src={"/bathRoom.jpg"}
                className="h-[400px] md:h-fit"
                fill
                alt={"img1"}
              />
            </div>
            <div className="p-8">
              <div className="text-4xl">
                Tidy <span className="text-blue-400 underline">Bathroom</span>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <div>WIPE DOOR HANDLES AND LIGHT SWITCHS</div>
                <div>WASH AND SANITIZE TOILET ,SHOWER AND SINK </div>
                <div>WIPE MIRRORS AND GLASS FIXTURES</div>
                <div>VACUM AND MOP ALL FLOORS </div>
                <div>EMPRY OUT TRASH AND RECYCLING</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-8 ml-[40%]">
              <div className="text-4xl">
                The Perfect{" "}
                <span className="text-blue-400 underline">Bedroom</span>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <div>Dust and wipe all reachable surfaces </div>
                <div>Wipe door handles and light switches</div>
                <div>Wipe mirrors and glass fixtures </div>
                <div>Make beds and change liners</div>
                <div>Vacum and mop all floors </div>
                <div>Take out the trash and recycling </div>
              </div>
            </div>
            <div className="relative h-[400px] ">
              <Image
                src={"/bedRoom.jpg"}
                className="h-[400px] md:h-fit"
                fill
                alt={"img1"}
              />
            </div>
          </div>
        </div>
        <div className=" text-center text-white font-bold bg-sky-400 py-14">
          <div className=" text-4xl"> Don’t wait, Book a cleaning now.</div>
          <div className=" font-normal text-sm mt-4 text-gray-200">
            Book expert home cleaners and handymen at a moment's notice. Just
            pick a time and we’ll do the rest.
          </div>
          <div className="grid grid-cols-1 gap-4 w-[85%] mx-auto mt-4 md:grid-cols-3 md:flex md:gap-0 md:justify-center">
            <input
              type="text"
              className="border border-gray-300 w-full md:w-[400px] px-2 h-[50px] md:h-[70px] py-2"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="border border-gray-300 w-full md:w-[100px] h-[50px] md:h-[70px] px-2 py-2"
              placeholder="Zip Code"
            />
            <input
              type="submit"
              className="bg-blue-400 px-4  py-2 md:w-[200px] w-full text-md md:text-2xl h-[70px]"
              value={"Continue"}
            />
          </div>
        </div>
        <div className=" text-center text-4xl font-bold bg-gray-100 py-14">
          Contact <span className="text-blue-300 underline">Us</span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            className="flex text-left text-base text-sky-400 gap-4 mx-auto mt-16 flex-col w-[90%] md:w-[66%]"
          >
            <div className="w-full">
              <label>Name</label>
              <div>
                <input
                  className="w-full border border-gray-400 p-3 mt-2"
                  placeholder="Your Name"
                  {...register("fname")}
                />
                {errors.fname && (
                  <p className="text-xs italic text-red-500 mt-2">
                    {" "}
                    {errors.fname?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <label>Email</label>
              <div>
                <input
                  className="w-full border border-gray-400 p-3 mt-2"
                  type="email"
                  placeholder="Your Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs italic text-red-500 mt-2">
                    {" "}
                    {errors.email?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <label>Phone</label>
              <div>
                <input
                  type="tel"
                  className="w-full border border-gray-400 p-3 mt-2"
                  placeholder="Your Phone"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-xs italic text-red-500 mt-2">
                    {" "}
                    {errors.phone?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <label>Message</label>
              <div>
                <textarea
                  className="w-full border border-gray-400 p-2 pb-8 mt-2"
                  placeholder="Message"
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <p className="text-xs italic text-red-500 mt-2">
                    {" "}
                    {errors.message?.message}
                  </p>
                )}
              </div>
            </div>
            <p>
              By entering any information, you affirm you have read and agree to
              the Terms of Service and Privacy Policy.
            </p>

            <button
              type="submit"
              className="p-4 bg-green-400 mb-20 rounded-md text-white font-bold text-xl"
            >
              Send
            </button>
          </form>
        </div>

        <Script
          src="//code.tidio.co/cknjplhesnbsxez5y1idm3dsw6p4ihsu.js"
          async
        ></Script>
      </main>
      <footer className="  py-8 bg-[#45c3d3] text-white ">
        <div className="w-[90%] mx-auto grid xl:grid-cols-4 justify-center md:grid-cols-3 grid-cols-1 border-b border-gray-400 pb-4">
          <div>
            <div className="text-2xl">Quick links</div>
            <ul className="mt-4">
              <li>Help</li>
              <li>About</li>
              <li>Press</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <div className="text-2xl">Legal stuff</div>
            <ul className="mt-4">
              <li>Terms of use</li>
              <li>Privacy Policy</li>
              //TO DO
              <li>Money Back Guarantee</li>
            </ul>
          </div>
          <div>
            <div className="text-2xl">Our Locations</div>
            <ul className="mt-4">
              <li>Boston</li>
              <li>Florida</li>
            </ul>
          </div>
          <div>
            <div className="text-2xl">Subscribe</div>
            <div className="flex mt-4 items-center">
              <input
                type="email"
                className="border  border-[#168d9b] py-4 px-3"
                placeholder="Enter your email"
              />
              <div className="bg-[#168d9b] py-5 px-6">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-[#45c3d3] text-white pt-6 items-center">
          © 2023 krystal. All rights reserved
        </div>
      </footer>
    </>
  );
}
