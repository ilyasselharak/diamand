import Extra from "@/components/Extra";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeFoter from "@/components/HomeFoter";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FcHome, FcCalendar, FcProcess } from "react-icons/fc";

export default function Type() {
  const router = useRouter();
  const path = router.query.type;
  const [repeat, setRepeat] = useState("One Time");
  const [time, setTime] = useState("");
  enum PRICE {
    STANDARD = 90.0,
    DEEP = 180.0,
    MOVE_IN_OUT = 260.0,
  }
  const [date, setDate] = useState("Choose service Day...");
  var price = 0;
  switch (path) {
    case "Standard":
      price = PRICE.STANDARD;
      break;
    case "Deep":
      price = PRICE.DEEP;
      break;
    case "Move-In-Out":
      price = PRICE.MOVE_IN_OUT;
      break;
  }

  return (
    <>
      <Header />
      <main className="w-[90%] mx-auto">
        <div className="mt-8 text-center font-bold text-2xl md:text-4xl uppercase">
          Make A Book as <span>{path}</span>
        </div>
        <div className="flex  gap-2 mt-16">
          <div className="md:w-[75%] border border-gray-200 p-5">
            <div className="text-2xl text-center border-b border-gray-300 pb-4">
              <div className="uppercase font-bold">Complete your booking</div>
              <div className="text-base text-gray-600 mt-2">
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
                    <option>1 Kitchen</option>
                    <option>2 Kitchen</option>
                    <option>3 Kitchen</option>
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
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  placeholder="CHOOSE A DAY"
                  className="border border-gray-500 w-full p-2 rounded-md"
                />
                <select
                  name="time"
                  id="time"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  className="border border-gray-400 rounded-md p-2 "
                >
                  <option value="08:00AM - 10:00AM">08:00AM - 10:00AM</option>
                  <option value="10:00AM - 12:00PM">10:00AM - 12:00PM</option>
                  <option value="12:00AM - 14:00PM">12:00AM - 14:00PM</option>
                  <option value="14:00AM - 16:00PM">14:00AM - 16:00PM</option>
                </select>
              </div>
              <div className="uppercase text-xl mt-6">HOW OFTEN</div>
              <p className="mt-3">
                It's all about matching you with the perfect clean for your
                home. Scheduling is flexible. Cancel or reschedule anytime.
                Discounts are applied based on selection.
              </p>
              <div className="text-center  border-b border-gray-300 pb-8">
                <select
                  onChange={(e) => {
                    setRepeat(e.target.value);
                  }}
                  className="border p-3 mt-6 text-center rounded-md w-[50%] border-gray-500"
                >
                  <option value={"One Time"}>One Time</option>
                  <option value={"Weekly"}>Weekly</option>
                  <option value={"Biweekly"}>Biweekly</option>
                  <option value={"Monthly"}>Monthly</option>
                </select>
              </div>
              <div className="uppercase text-xl mt-6">Who you are</div>
              <p className="mt-3">
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
              <div className="mt-3">Where would you like us to clean?</div>
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
                  <select className="border border-gray-400 rounded-md">
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
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
                <div>
                  {date}
                  {date !== "Choose service Day..." ? " / " + time : ""}
                </div>
              </div>
              <div className="mt-4 flex gap-4 items-center">
                <FcProcess className="text-4xl" />
                <div>{repeat}</div>
              </div>
              <div className="flex justify-between mt-14 border-t border-gray-600 pt-8">
                <div className="uppercase font-bold">total</div>
                <div className="text-xl">{price}$</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[200px]"></div>
        <HomeFoter />
      </main>
      <Footer />
    </>
  );
}
