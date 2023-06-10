import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeFoter from "@/components/HomeFoter";
import Image from "next/image";
import Script from "next/script";
import React from "react";

function workplace() {
  return (
    <>
      <Header />

      <main className="w-[80%] mt-14 mx-auto">
        <div className="text-xl md:text-4xl font-mono font-bold text-center">
          Our Experience
        </div>
        <div className="flex gap-4 flex-wrap mt-4 justify-center">
          <Image
            alt="photo"
            src={"/images/img1.jpeg"}
            className="rounded-2xl"
            width={200}
            height={200}
          />
          <Image
            alt="photo"
            src={"/images/img2.jpeg"}
            className="rounded-2xl"
            width={200}
            height={200}
          />
          <Image
            alt="photo"
            src={"/images/img3.jpeg"}
            className="rounded-2xl"
            width={200}
            height={200}
          />
          <Image
            alt="photo"
            src={"/images/img4.jpeg"}
            className="rounded-2xl"
            width={250}
            height={200}
          />
          <Image
            alt="photo"
            src={"/images/img5.jpeg"}
            className="rounded-2xl"
            width={200}
            height={200}
          />
          <Image
            alt="photo"
            src={"/images/img6.jpeg"}
            className="rounded-2xl"
            width={200}
            height={200}
          />
          <Image
            alt="photo"
            src={"/images/img7.jpeg"}
            className="rounded-2xl"
            width={200}
            height={200}
          />
        </div>
        <div className="uppercase text-xl md:text-4xl font-mono font-bold text-center mt-14">
          before / after{" "}
        </div>
        <div className="flex gap-4 flex-wrap justify-center mt-14">
          <div className="flip-card ">
            <div className="flip-card-inner rounded-xl">
              <div className="flip-card-front rounded-xl bg-[url('/images/imgbe1.jpeg')] bg-center bg-cover text-white"></div>
              <div className="flip-card-back bg-[url('/images/imgaf1.jpeg')] bg-center bg-cover flex flex-col justify-around rounded-xl"></div>
            </div>
          </div>
          <div className="flip-card ">
            <div className="flip-card-inner rounded-xl">
              <div className="flip-card-front rounded-xl bg-[url('/images/imgbe2.jpeg')] bg-center bg-cover text-white"></div>
              <div className="flip-card-back bg-[url('/images/imgaf2.jpeg')] bg-center bg-cover flex flex-col justify-around rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="mt-14"></div>

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

export default workplace;
