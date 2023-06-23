import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function HomeFoter() {
  return (
    <div className="bg-sky-500 text-white h-[200px] font-serif  p-2 hidden md:block">
      <div className="flex justify-around items-center mt-8">
        <div>
          <div className="flex gap-4 font-bold text-white ml-4">
            <span className="hover:underline hover:text-xl">Book Now</span>
            <span className="hover:underline hover:text-xl">Call us</span>
            <Link
              href={"/Refund"}
              className="hover:underline hover:text-xl cursor-pointer"
            >
              Cancellation Policy
            </Link>
            <Link
              href={"/privacy-policy"}
              className="hover:underline hover:text-xl cursor-pointer"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-4xl flex gap-3">
          <span>
            <BsFacebook />
          </span>
          <Link href={"https://www.instagram.com/krystalcleaningservicesma/"}>
            <BsInstagram />
          </Link>
        </div>
      </div>
      <div className="text-center mt-4">Ⓒ 2023 - All Rights Are Reserved</div>
    </div>
  );
}
