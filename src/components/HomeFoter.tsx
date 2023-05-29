import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function HomeFoter() {
  return (
    <div className="bg-green-200 h-[200px] mt-16 p-2 hidden md:block">
      <div className="flex justify-around items-center">
        <div>
          <Image
            src={"/logo.png"}
            className="w-[200px] h-[90px] md:w-[250px] md:h-[100px]"
            width={250}
            height={150}
            alt={"logo"}
          />
          <div className="flex gap-4 font-bold text-gray-700 ml-4">
            <span className="hover:underline hover:text-xl">Book Now</span>
            <span className="hover:underline hover:text-xl">Call us</span>
            <span className="hover:underline hover:text-xl">
              Cancellation Policy
            </span>
            <span className="hover:underline hover:text-xl">
              Privacy Policy
            </span>
          </div>
        </div>
        <div className="text-4xl flex gap-3">
          <span>
            <BsFacebook />
          </span>
          <span>
            <BsInstagram />
          </span>
        </div>
      </div>
      <div className="text-center mt-4">Ⓒ 2023 - All Rights Are Reserved</div>
    </div>
  );
}