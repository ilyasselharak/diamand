import Extra from "@/components/Extra";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  FcHome,
  FcCallback,
  FcPlanner,
  FcCalendar,
  FcProcess,
} from "react-icons/fc";

export default function Type() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const handleClick = (event: any) => {
    if (event.target.checked === true) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };
  return (
    <>
      <Header />
      <main className="w-[90%] mx-auto">
        <div className="mt-8 text-center font-bold text-4xl uppercase">
          Make A Book as <span>{router.query.type}</span>
        </div>
        <div className="flex  gap-2 mt-16">
          <div className="md:w-[75%] border border-gray-200 p-5">
            <div className="text-2xl text-center border-b border-gray-300 pb-4">
              <div className="uppercase font-bold">Complete your booking</div>
              <div className=" text-base text-gray-600 mt-2">
                Great! Few details and we can complete your booking.
              </div>
            </div>
            <div>
              <div className="uppercase text-xl mt-6">
                tell us about your home
              </div>
              <div className="flex flex-col gap-5 border-b border-gray-300 pb-8">
                <div className="flex gap-4 w-full md:w-[60%] mx-auto mt-4">
                  <select className="text-center border py-2 md:p-3 rounded-md w-full border-gray-500">
                    <option>1 Bedroom</option>
                    <option>2 Bedroom</option>
                    <option>3 Bedroom</option>
                  </select>
                  <select className="text-center border py-2 md:p-3 rounded-md  w-full border-gray-500">
                    <option>1 Bathroom</option>
                    <option>2 Bathroom</option>
                    <option>3 Bathroom</option>
                  </select>
                </div>
                <div className="flex gap-4 w-full md:w-[60%] mx-auto">
                  <select className="text-center border py-2 md:p-3 rounded-md w-full border-gray-500">
                    <option>1 kitchen</option>
                    <option>2 kitchen</option>
                    <option>3 kitchen</option>
                  </select>
                  <select className="text-center border py-2 md:p-3 rounded-md w-full border-gray-500">
                    <option>Slightly Dirty</option>
                    <option>Pretty Dirty</option>
                    <option>Very Dirty</option>
                  </select>
                </div>
              </div>
              <div className="border-b border-gray-300 pb-8">
                <div className="uppercase text-xl mt-6">add Extras</div>
                <div className="flex gap-4 flex-wrap justify-center mt-8">
                  <div>
                    <Extra Dir="/assets/oven.svg" title="oven" />
                  </div>
                  <div>
                    <Extra Dir="/assets/dishwasher.svg" title="dishwasher" />
                  </div>
                  <div>
                    <Extra Dir="/assets/wall.svg" title="wall" />
                  </div>
                  <div>
                    <Extra Dir="/assets/blind.svg" title="blind" />
                  </div>

                  <div>
                    <Extra Dir="/assets/fridge.svg" title="fridge" />
                  </div>
                  <div>
                    <Extra Dir="/assets/microwave.svg" title="microwave" />
                  </div>
                  <div>
                    <Extra Dir="/assets/window.svg" title="window" />
                  </div>
                  <div>
                    <Extra Dir="/assets/dryer.svg" title="dryer" />
                  </div>
                </div>
              </div>
              <div className="uppercase text-xl mt-6">
                WHEN WOULD YOU LIKE US TO COME?
              </div>
              <p className="mt-4">
                Choose the date and arrival window* that works for you. If you
                need a last-minute appointment give us a call at from{" "}
                <a href={`tel:1-781-367-6258`} className="text-green-400">
                  here
                </a>{" "}
                *Please note: Your arrival window is the block of time in which
                the cleaners may arrive.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 border-b border-gray-300 pb-8">
                <input
                  type="date"
                  className="border border-gray-500 p-2 rounded-md"
                />
                <select
                  name="time"
                  id="time"
                  className="border border-gray-400 rounded-md p-2 "
                >
                  <option value="8-10">08:00AM - 10:00AM</option>
                  <option value="10-12">10:00AM - 12:00PM</option>
                  <option value="12-14">12:00AM - 14:00PM</option>
                  <option value="14-16">14:00AM - 16:00PM</option>
                </select>
              </div>
              <div className="uppercase text-xl mt-6">HOW OFTEN</div>
              <p>
                It's all about matching you with the perfect clean for your
                home. Scheduling is flexible. Cancel or reschedule anytime.
                Discounts are applied based on selection.
              </p>
              <div className="text-center  border-b border-gray-300 pb-8">
                <select className="border p-3 mt-6 text-center rounded-md w-[50%] border-gray-500">
                  <option>One Time</option>
                  <option>Weekly</option>
                  <option>Biweekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div className="uppercase text-xl mt-6">Who you are</div>
              <p>
                This information will be used to contact you about your service.
              </p>
              <div className="flex flex-col gap-2 mt-8 border-b border-gray-300 pb-8">
                <div className="flex justify-center gap-2">
                  <div className="md:w-[40%]">
                    <input
                      type="text"
                      className="p-2 border border-gray-500 rounded-md w-full"
                      placeholder="Your First Name"
                    />
                  </div>
                  <div className="md:w-[40%]">
                    <input
                      type="text"
                      className="p-2 border border-gray-500 rounded-md w-full"
                      placeholder="Your Last Name"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <div className="md:w-[40%]">
                    <input
                      type="email"
                      className="p-2 border border-gray-500 rounded-md w-full"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="md:w-[40%]">
                    <input
                      type="tel"
                      className="p-2 border border-gray-500 rounded-md w-full"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="uppercase text-xl mt-6">Address</div>
              <div>Where would you like us to clean?</div>
              <div className="flex flex-wrap gap-2 mt-8 border-b border-gray-300 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-[100%]">
                  <input
                    type="text"
                    className="border border-gray-400 rounded-md p-2"
                    placeholder="Address*"
                  />
                  <input
                    type="text"
                    className="border border-gray-400 rounded-md p-2"
                    placeholder="Apt/Suite #"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-[100%]">
                  <input
                    type="text"
                    className="border border-gray-400 rounded-md p-2"
                    placeholder="City*"
                  />
                  <select
                    name=""
                    className="rounded-md border border-gray-400"
                    id=""
                  ></select>
                  <input
                    type="text"
                    className="border border-gray-400 rounded-md p-2"
                    placeholder="ZIP CODE*"
                  />
                </div>
              </div>
              <div className="uppercase text-xl mt-6">
                Comments & Special Instructions
              </div>
              <div className="border-b border-gray-300 pb-8">
                <textarea
                  name=""
                  id=""
                  rows={3}
                  placeholder="Special Instructions: Is there anything we should know? Example: I am allergic to a particular cleaning product"
                  className="border border-gray-400 w-full resize-none mt-4 md:p-4 p-2 rounded-md"
                ></textarea>
              </div>
              <div className="mt-8">
                By clicking the Book Now button you are agreeing to our Terms of
                Service and Privacy Policy.
              </div>
              <div className="flex gap-4 mt-4">
                <input type="checkbox" />
                <span>I agree to the Terms of Service and Privacy Policy.</span>
              </div>
            </div>
            <button className="p-4 text-xl text-white font-bold bg-green-400 mb-20 rounded-md w-full mt-14">
              Book Now
            </button>
          </div>
          <div className="hidden md:block  ">
            <div className="fixed w-[25%]  border rounded-lg p-4 border-gray-500">
              <div className="border-b border-gray-300 text-center text-xl pb-4 uppercase">
                Booking Summary
              </div>
              <div className="flex gap-2 mt-8 justify-between items-end">
                <div className="flex gap-6">
                  <FcHome className="text-4xl" />
                  <div>
                    1 Bedroom{" "}
                    <ul className="ml-4 list-disc ">
                      <li>1 kitchen</li>
                      <li>1 bathroom</li>
                    </ul>
                  </div>
                </div>
                <div>90.00$</div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <FcCalendar className="text-4xl" />
                <div>24/05/2023 / 8:00AM-10:00AM</div>
              </div>
              <div className="mt-4 flex gap-4 items-center">
                <FcProcess className="text-4xl" />
                <div>One Time</div>
              </div>
              <div className="flex justify-between mt-14 border-t border-gray-600 pt-8">
                <div className="uppercase font-bold">total</div>
                <div className="text-xl">90.00$</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[400px]"></div>
      </main>
    </>
  );
}
