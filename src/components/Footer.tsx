import Link from "next/link";
import React from "react";
import { FcHome, FcCallback, FcOvertime, FcGallery } from "react-icons/fc";

function Footer() {
  return (
    <div className="fixed md:hidden bg-white w-full shadow-inner  h-[60px] sm:h-[80px] bottom-0">
      <div className=" flex flex-wrap  mt-3 sm:gap-10 justify-around text-md sm:text-xl items-center">
        <Link
          href={"/"}
          className=" flex flex-col gap-1 items-center  text-blue-400 sm:text-2xl"
        >
          <FcHome />
          Home
        </Link>
        <Link
          href={"/Booking/Standard"}
          className="flex-col flex gap-1 items-center"
        >
          <FcOvertime />
          Book
        </Link>
        <Link href={"/#contact"} className=" flex-col flex gap-1 items-center">
          <FcCallback /> Contact
        </Link>
        <Link href={"/workplace"} className="flex-col flex gap-1 items-center">
          <FcGallery />
          Gallery
        </Link>
      </div>
    </div>
  );
}

export default Footer;
