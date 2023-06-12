import Link from "next/link";
import React from "react";
import {
  FcCalendar,
  FcClock,
  FcDepartment,
  FcInfo,
  FcReuse,
} from "react-icons/fc";
import { FiDollarSign } from "react-icons/fi";
type Props = {
  title: string;
  price: number;
  houre: string;
};
export default function Package({ title, price, houre }: Props) {
  return (
    <>
      <div className="flip-card ">
        <div className="flip-card-inner rounded-xl">
          <div className="flip-card-front rounded-xl bg-cyan-500 text-white">
            <div className="flex h-[90%] justify-between flex-col">
              <div className="text-2xl border-b font-mono font-bold text-black border-gray-400 p-4">
                {title}
              </div>
              <div>Starting from:</div>
              <div className="text-6xl flex items-center justify-center mt-4 font-medium ">
                {price}
                <FiDollarSign />
              </div>
              <div className="text-white cursor-pointer sm:mt-4  w-fit  flex items-center gap-1  py-2 px-5 rounded-md mx-auto">
                <FcInfo />
                Details
              </div>
            </div>
          </div>
          <div className="flip-card-back bg-green-500 flex flex-col justify-around rounded-xl">
            <div className="text-start w-[80%] mx-auto h-[150px] flex flex-col justify-around">
              <div className="text-center text-xl">{title} details</div>
              <p className="flex items-center gap-1 mt-2">
                <FcClock />
                {houre} hours Session
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FcReuse /> Kitchen
                </p>
                <p className="flex items-center gap-2">
                  <FcReuse /> the Floor
                </p>
                <p className="flex items-center gap-2">
                  <FcReuse /> 1 Room
                </p>
                <p className="flex items-center gap-2">
                  <FcReuse /> the Bathroom
                </p>
                <p className="flex items-center gap-1">
                  <FcDepartment />
                  1000 sq
                </p>
              </div>
            </div>
            <div className="w-full ">
              <Link href={`/Booking/${title}`}>
                <button className="bg-cyan-500  text-center text-white px-6 py-3 rounded-xl w-fit ">
                  <div className="flex items-center gap-2">
                    <FcCalendar /> Next
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
