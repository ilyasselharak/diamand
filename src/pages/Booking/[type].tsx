import Extra from "@/components/Extra";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { z } from "zod";
import HomeFoter from "@/components/HomeFoter";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcHome, FcCalendar, FcFullTrash } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import Script from "next/script";
import Head from "next/head";
type MyObject = {
  title: string;
  isSelected: boolean;
  price: number;
};

export default function Type() {
  const [extra, setExtra] = useState<string[]>([]);

  const router = useRouter();
  const path = router.query.type;
  const [time, setTime] = useState("");
  const [discount, setDiscount] = useState(0);
  const [bedRoom, setBedRoom] = useState(1);
  const [bathRoom, setBathRoom] = useState(1);
  const [dirty, setDirty] = useState("Slightly");
  const [cash, setCash] = useState(true);
  const [kitchen, setKitchen] = useState(1);
  const [priceDirty, setPriceDirty] = useState(0);
  const [apt, setApt] = useState("");
  const [comment, setComment] = useState("");
  const [total, setTotal] = useState(0);
  const [date, setDate] = useState("Choose service Day...");
  const [surface, setSurface] = useState(1000);

  const [minDate, setMinDate] = useState("");
  const today = new Date().toISOString().split("T")[0];

  enum PRICE {
    STANDARD = 90.0,
    DEEP = 180.0,
    MOVE_IN_OUT = 260.0,
  }

  var prices = 0;
  switch (path) {
    case "Standard":
      prices = PRICE.STANDARD;
      break;
    case "Deep":
      prices = PRICE.DEEP;
      break;
    case "Move-In-Out":
      prices = PRICE.MOVE_IN_OUT;
      break;
  }

  const handleObjectReturn = (obj: MyObject) => {
    if (obj.isSelected == true) {
      setExtra([...extra, obj.title]);
      setTotal(total + obj.price);
    } else if (obj.isSelected == false) {
      setTotal(total - obj.price);
      setExtra(extra.filter((item) => item !== obj.title));
    }
  };
  type ValidationSchema = z.infer<typeof validationSchema>;
  const validationSchema = z.object({
    fname: z.string().min(1, { message: "First Name is required" }),
    lname: z.string().min(1, { message: "Last Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),

    phone: z.string().min(5, { message: "phone must be at least 6 numbers" }),
    address: z.string().min(1, { message: "Address is required" }),
    city: z.string().min(1, { message: "city is required" }),
    zip: z.string().min(1, { message: "Postal Code is required" }),
    state: z.string().min(1, { message: "State/Region is required" }),
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
    setTotal(bedRoom * 15 + bathRoom * 20 + kitchen * 40 + prices - 75 + total);
    axios.post("../api/order", {
      feautures: extra,
      packages: path,
      bathRoom: bathRoom,
      bedRoom: bedRoom,
      kitchen: kitchen,
      date: date,
      time: time,
      apt: apt,
      dirty: dirty,
      comment: comment,
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      zip: data.zip,
      region: data.state,
      surface: surface,
    });
    router.push(`/success/${data.fname}`);
  };
  const handleSurfaceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSurface(Number(e.target.value));
  };

  return (
    <>
      <Head>
        <title>BOOK | {router.query.type}</title>
        <meta
          name="title"
          content="Krystal Cleaning Services Pro - House Cleaning, Deep Cleaning"
        />
        <meta
          name="description"
          content="If you have your day to day cleaning under control, let us do the really dirty work. We provide deep clean services to reach the places you might have missed."
        />
      </Head>
      <Header />
      <main className="w-[95%] mx-auto">
        <div className=" flex  justify-center gap-16 mt-8 text-center font-bold text-2xl md:text-4xl uppercase">
          Make A Book as
        </div>
        <div className="flex justify-center mt-4 gap-8 text-xl">
          <Link
            href={"/Booking/Standard"}
            className={`${
              router.query.type == "Standard" ? "text-blue-400" : ""
            }`}
          >
            Standard
          </Link>
          <Link
            href={"/Booking/Deep"}
            className={`${router.query.type == "Deep" ? "text-blue-400" : ""}`}
          >
            Deep
          </Link>
          <Link
            href={"/Booking/Move-In-Out"}
            className={`${
              router.query.type == "Move-In-Out" ? "text-blue-400" : ""
            }`}
          >
            Move IN/OUT
          </Link>
        </div>
        <div className="flex  gap-2 mt-16">
          <form
            className="md:w-[75%] border border-gray-200 p-5"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
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
                <div className="flex gap-4  w-full md:w-[80%] mx-auto mt-4">
                  <div className="w-full flex flex-col gap-4">
                    <select
                      onChange={(e) => {
                        setBedRoom(Number(e.target.value));
                      }}
                      className="text-center border py-2 md:p-3 rounded-md w-full border-gray-500"
                    >
                      <option value={1}>1 Bedroom</option>
                      <option value={2}>2 Bedroom</option>
                      <option value={3}>3 Bedroom</option>
                    </select>

                    <select
                      onChange={(e) => {
                        setDirty(e.target.value);
                        if (e.target.value == "Pretty") {
                          setPriceDirty(40);
                        } else if (e.target.value == "Very") {
                          setPriceDirty(60);
                        } else {
                          setPriceDirty(0);
                        }
                      }}
                      className="text-center border py-2 md:p-3 rounded-md  w-full border-gray-500"
                    >
                      <option value={"Slightly"}>Slightly Dirty</option>
                      <option value={"Pretty"}>Pretty Dirty</option>
                      <option value={"Very"}>Very Dirty</option>
                    </select>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <select
                      onChange={(e) => {
                        setKitchen(Number(e.target.value));
                      }}
                      className="text-center border py-2 md:p-3 rounded-md w-full border-gray-500"
                    >
                      <option value={1}>1 Kitchen</option>
                      <option value={2}>2 Kitchen</option>
                      <option value={3}>3 Kitchen</option>
                    </select>
                    <select
                      onChange={(e) => {
                        setBathRoom(Number(e.target.value));
                      }}
                      className="text-center border py-2 md:p-3 rounded-md  w-full border-gray-500"
                    >
                      <option value={1}>1 Bathroom</option>
                      <option value={2}>2 Bathroom</option>
                      <option value={3}>3 Bathroom</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 flex-wrap items-center mt-6">
                  <div className="uppercase text-xl ">
                    {" "}
                    How is big your house:
                  </div>
                  <input
                    type="range"
                    min="1000"
                    step={"500"}
                    max="10000"
                    value={surface}
                    onChange={handleSurfaceChange}
                  />
                  <div>
                    {surface}
                    <span>sq</span>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-300 pb-8">
                <div className="uppercase text-xl mt-6">add Extras</div>
                <div className="flex gap-4 flex-wrap justify-center mt-8">
                  <div>
                    <Extra
                      onClick={handleObjectReturn}
                      Dir="/assets/oven.svg"
                      title="Oven"
                      price={30}
                    />
                  </div>

                  <div>
                    <Extra
                      onClick={handleObjectReturn}
                      Dir="/assets/fridge.svg"
                      title="Fridge"
                      price={30}
                    />
                  </div>
                  <div>
                    <Extra
                      onClick={handleObjectReturn}
                      Dir="/assets/microwave.svg"
                      title="Microwave"
                      price={30}
                    />
                  </div>
                  <div>
                    <Extra
                      onClick={handleObjectReturn}
                      Dir="/assets/window.svg"
                      title="Inside window"
                      price={30}
                    />
                  </div>

                  <div>
                    <Extra
                      onClick={handleObjectReturn}
                      Dir="/assets/cabinet.svg"
                      title="Cabinet"
                      price={30}
                    />
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
              <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-300 pb-6 gap-4 mt-8  ">
                <input
                  type="date"
                  name="date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  placeholder="MM/DD/YYYY"
                  min={minDate}
                  onClick={() => setMinDate(today)}
                  className="border border-gray-500 w-full arriveDate p-2 rounded-md"
                />
                <select
                  name="time"
                  id="time"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  className="border border-gray-400 rounded-md p-2 "
                >
                  <option value="">Time :</option>
                  <option value="08:00AM - 10:00AM">08:00AM - 10:00AM</option>
                  <option value="10:00AM - 12:00PM">10:00AM - 12:00PM</option>
                  <option value="12:00AM - 14:00PM">12:00AM - 14:00PM</option>
                  <option value="14:00AM - 16:00PM">14:00AM - 16:00PM</option>
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
                      {...register("fname")}
                      id="fname"
                      name="fname"
                      className="p-2 border border-gray-500 rounded-md w-full"
                      placeholder="Your First Name"
                    />
                    {errors.fname && (
                      <p className="text-xs italic text-red-500 mt-2">
                        {" "}
                        {errors.fname?.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-[40%]">
                    <input
                      type="text"
                      {...register("lname")}
                      id="lname"
                      name="lname"
                      className="p-2 border border-gray-500 rounded-md w-full"
                      placeholder="Your Last Name"
                    />
                    {errors.lname && (
                      <p className="text-xs italic text-red-500 mt-2">
                        {" "}
                        {errors.lname?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <div className="md:w-[40%]">
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className="p-2 border border-gray-500 rounded-md w-full"
                      placeholder="Your Email"
                    />
                    {errors.email && (
                      <p className="text-xs italic text-red-500 mt-2">
                        {" "}
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-[40%]">
                    <input
                      type="tel"
                      {...register("phone")}
                      className="p-2 border border-gray-500 rounded-md w-full"
                      placeholder="Your Phone"
                      name="phone"
                      id="phone"
                    />
                    {errors.phone && (
                      <p className="text-xs italic text-red-500 mt-2">
                        {" "}
                        {errors.phone?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="uppercase text-xl mt-6">Address</div>
              <div className="mt-3">Where would you like us to clean?</div>
              <div className="flex  flex-wrap gap-2 mt-8 border-b border-gray-300 pb-8">
                <div className="w-[100%]">
                  <div className="">
                    <input
                      type="text"
                      id="address"
                      className="border w-full border-gray-400 rounded-md p-2"
                      {...register("address")}
                      placeholder="Address*"
                    />
                    {errors.address && (
                      <p className="text-xs italic text-red-500 mt-2">
                        {" "}
                        {errors.address?.message}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 mt-4  gap-4 flex-row">
                    <input
                      type="text"
                      className="border  border-gray-400 rounded-md p-2"
                      placeholder="Address Line 2"
                      id="apt"
                      onChange={(e) => {
                        setApt(e.target.value);
                      }}
                    />
                    <div>
                      <input
                        type="text"
                        placeholder="City *"
                        id="city"
                        {...register("city")}
                        className="border w-full border-gray-400 rounded-md p-2"
                      />
                      {errors.city && (
                        <p className="text-xs italic text-red-500 mt-2">
                          {" "}
                          {errors.city?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 mt-4  gap-4 flex-row">
                    <div>
                      <input
                        type="text"
                        placeholder="State/Region *"
                        {...register("state")}
                        className="border w-full border-gray-400 rounded-md p-2"
                      />
                      {errors.state && (
                        <p className="text-xs italic text-red-500 mt-2">
                          {" "}
                          {errors.state?.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        id="city"
                        placeholder="ZIP/Postal code* "
                        {...register("zip")}
                        className="border w-full border-gray-400 rounded-md p-2"
                      />
                      {errors.zip && (
                        <p className="text-xs italic text-red-500 mt-2">
                          {" "}
                          {errors.zip?.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="uppercase text-xl mt-6">
                Comments & Special Instructions
              </div>
              <div className="border-b border-gray-300 pb-8">
                <textarea
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  rows={3}
                  placeholder="Special Instructions: Is there anything we should know? Example: I am allergic to a particular cleaning product"
                  className="border border-gray-400 w-full resize-none mt-4 md:p-4 p-2 rounded-md"
                ></textarea>
              </div>
              <div className="uppercase text-xl mt-6">Discount Friend</div>
              <div className="border-b border-gray-300 pb-8">
                <input
                  placeholder="Discount Code:"
                  onChange={(e) => {
                    e.target.value == process.env.NEXT_PUBLIC_DISCOUNT_CODE
                      ? setDiscount(10)
                      : prices;
                    console.log(prices);
                  }}
                  className={`border ${
                    discount > 0 ? "border-green-400 " : " border-gray-400"
                  } w-full resize-none mt-4 md:p-4 p-2 rounded-md`}
                ></input>
              </div>

              <div className="mt-8">
                By clicking the Book Now button you are agreeing to our{" "}
                <Link
                  href="/privacy-policy"
                  className=" text-[#062c96] font-bold cursor-pointer"
                >
                  Privacy Policy
                </Link>
                .
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                alt="venmo"
                className="w-[200px] mt-8 md:w-[250px] h-[80px] md:h-[100px] rounded-md"
                width={250}
                height={500}
                src={"/venmo.png"}
              />
            </div>
            <div className="mt-14"></div>
            {cash && (
              <>
                <PayPalButton
                  amount={
                    bedRoom * 15 +
                    bathRoom * 20 +
                    kitchen * 40 +
                    prices -
                    75 +
                    total +
                    (bedRoom * 15 +
                      bathRoom * 20 +
                      kitchen * 40 +
                      prices -
                      75 +
                      total) *
                      0.1 -
                    discount
                  }
                  onSuccess={(details: any, data: any) => {
                    alert("success");
                  }}
                  options={{
                    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                    currency: "USD",
                  }}
                />
                <div
                  className="flex w-full justify-end text-[#062c96] font-bold"
                  onClick={() => setCash(!cash)}
                >
                  <label className=" cursor-pointer uppercase">
                    i will pay Cash{" "}
                    <span className="text-sm text-blue-400">without Tax</span>
                  </label>
                </div>
              </>
            )}

            {!cash && (
              <>
                <button
                  type="submit"
                  className="p-4 text-xl text-white font-bold bg-green-400 mb-20 rounded-md w-full "
                >
                  Book Now
                </button>
                <div
                  className="flex w-full justify-end text-[#062c96] font-bold"
                  onClick={() => setCash(!cash)}
                >
                  <label className=" cursor-pointer uppercase">
                    i will pay with PayPal
                  </label>
                </div>
              </>
            )}
          </form>
          <div className="hidden md:block relative w-[30%]">
            <div className="sticky top-0 w-full border rounded-lg p-4 border-gray-500">
              <div className="border-b border-gray-300 text-center text-xl pb-4 uppercase">
                Booking Summary
              </div>

              <div className="flex gap-2 mt-8 justify-between items-end">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <FcHome className="text-4xl" />
                    <div className="text-sm">{surface}sq</div>
                  </div>
                  <div>
                    {bedRoom} Bedroom{" "}
                    <ul className="ml-4 list-disc ">
                      <li>{kitchen} kitchen</li>
                      <li>{bathRoom} bathroom</li>
                    </ul>
                    <div className="flex items-center gap-1">
                      <FcFullTrash />
                      {dirty} Dirty
                    </div>
                    {extra.map((item, index) => {
                      return (
                        <p key={index} className="uppercase mt-4">
                          + Clean {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div>
                  {
                    (prices =
                      bedRoom * 15 +
                      priceDirty +
                      bathRoom * 20 +
                      kitchen * 40 +
                      prices -
                      75 +
                      total +
                      ((surface - 1000) / 500) * 15)
                  }
                  $
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <FcCalendar className="text-4xl" />
                <div>
                  {date}
                  {date !== "Choose service Day..." ? " / " + time : ""}
                </div>
              </div>
              <div className="mt-14">
                {cash && (
                  <div className="flex justify-between  ">
                    <span>PayPal Tax:</span> 10%
                  </div>
                )}
                {discount > 0 && (
                  <div className="flex justify-between ">
                    <span>Discount:</span> -10$
                  </div>
                )}
              </div>
              <div className="flex justify-between mt-2 border-t border-gray-600 pt-8">
                <div className="uppercase font-bold">total</div>
                <div className="text-xl">
                  {cash ? prices + prices * 0.1 - discount : prices - discount}$
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[200px]"></div>
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
