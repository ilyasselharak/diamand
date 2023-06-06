import Extra from "@/components/Extra";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { z } from "zod";
import HomeFoter from "@/components/HomeFoter";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcHome, FcCalendar, FcProcess } from "react-icons/fc";
import Link from "next/link";
import { PayPalButton } from "react-paypal-button-v2";

type MyObject = {
  title: string;
  isSelected: boolean;
  price: number;
};
export default function Type() {
  const [data, setData] = useState<string[]>([]);
  const router = useRouter();
  const path = router.query.type;
  const [repeat, setRepeat] = useState("One Time");
  const [time, setTime] = useState("");
  const [bedRoom, setBedRoom] = useState(1);
  const [bathRoom, setBathRoom] = useState(1);
  const [kitchen, setKitchen] = useState(1);
  const [total, setTotal] = useState(0);
  const [clicked, setClicked] = useState(true);

  const handleObjectReturn = (obj: MyObject) => {
    if (obj.isSelected == true) {
      setData([...data, obj.title]);
      setTotal(total + obj.price);
    } else if (obj.isSelected == false) {
      setTotal(total - obj.price);
      setData(data.filter((item) => item !== obj.title));
    }
  };
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

  type ValidationSchema = z.infer<typeof validationSchema>;
  const validationSchema = z.object({
    fname: z.string().min(1, { message: "First Name is required" }),
    lname: z.string().min(1, { message: "Last Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),

    phone: z.string().min(5, { message: "phone must be at least 6 numbers" }),
    address: z.string().min(1, { message: "Address is required" }),
    // city: z.string().min(1, { message: "city is required" }),
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
    console.log(data);
  };
  return (
    <>
      <Header />
      <main className="w-[95%] mx-auto">
        <div className="mt-8 text-center font-bold text-2xl md:text-4xl uppercase">
          Make A Book as <span>{path}</span>
        </div>
        <div className="flex  gap-2 mt-16">
          <form
            className="md:w-[75%] border border-gray-200 p-5"
            onSubmit={handleSubmit(onSubmit)}
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
                <div className="flex gap-4 w-full md:w-[60%] mx-auto mt-4">
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
                      setBathRoom(Number(e.target.value));
                    }}
                    className="text-center border py-2 md:p-3 rounded-md  w-full border-gray-500"
                  >
                    <option value={1}>1 Bathroom</option>
                    <option value={2}>2 Bathroom</option>
                    <option value={3}>3 Bathroom</option>
                  </select>
                </div>
                <div className="flex gap-4 w-full md:w-[60%] mx-auto">
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
                    <Extra
                      onClick={handleObjectReturn}
                      Dir="/assets/oven.svg"
                      title="oven"
                      price={30}
                    />
                  </div>

                  <div>
                    <Extra
                      onClick={handleObjectReturn}
                      Dir="/assets/fridge.svg"
                      title="fridge"
                      price={30}
                    />
                  </div>
                  <div>
                    <Extra
                      onClick={handleObjectReturn}
                      Dir="/assets/microwave.svg"
                      title="microwave"
                      price={30}
                    />
                  </div>
                  <div>
                    <Extra
                      onClick={handleObjectReturn}
                      Dir="/assets/window.svg"
                      title="inside window"
                      price={30}
                    />
                  </div>

                  <div>
                    <Extra
                      onClick={handleObjectReturn}
                      Dir="/assets/cabinet.svg"
                      title="cabinet"
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
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-300 pb-6 gap-4 mt-8  ">
                <input
                  type="date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  placeholder="MM/DD/YYYY"
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
                  <option value="">Time :</option>
                  <option value="08:00AM - 10:00AM">08:00AM - 10:00AM</option>
                  <option value="10:00AM - 12:00PM">10:00AM - 12:00PM</option>
                  <option value="12:00AM - 14:00PM">12:00AM - 14:00PM</option>
                  <option value="14:00AM - 16:00PM">14:00AM - 16:00PM</option>
                </select>
                <select
                  onChange={(e) => {
                    setRepeat(e.target.value);
                  }}
                  className="border p-3 mt-6 text-center rounded-md w-full border-gray-500"
                >
                  <option value={"One Time"}>HOW OFTEN :</option>
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
                      {...register("fname")}
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
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-[100%]">
                  <div className="">
                    <input
                      type="text"
                      className="border w-full border-gray-400 rounded-md p-2"
                      {...register("address")}
                      placeholder="Address*"
                    />
                    {errors.email && (
                      <p className="text-xs italic text-red-500 mt-2">
                        {" "}
                        {errors.address?.message}
                      </p>
                    )}
                  </div>
                  <input
                    type="text"
                    className="border border-gray-400 rounded-md p-2"
                    placeholder="Apt/Suite #"
                  />
                  <select className="border p-2 border-gray-400 rounded-md">
                    <option>Choose area</option>
                    <option value="Andover">Andover</option>
                    <option value="Billerica">Billerica</option>
                    <option value="Boxford">Boxford</option>
                    <option value="Georgetown">Georgetown</option>
                    <option value="Groveland">Groveland</option>
                    <option value="Middleton">Middleton</option>
                    <option value="North Andover">North Andover</option>
                    <option value="Tewksbury">Tewksbury</option>
                    <option value="Topsfield">Topsfield</option>
                    <option value="West Bosford">West Bosford</option>
                    <option value="Willmington">Willmington</option>
                    <option value="Woburn">Woburn</option>
                    <option value="Melrose">Melrose</option>
                    <option value="Stoneham">Stoneham</option>
                    <option value="Cambridge">Cambridge</option>
                  </select>
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
                Service and{" "}
                <Link href="/privacy-policy" className="cursor-pointer">
                  Privacy Policy
                </Link>
                .
              </div>
              <div className="flex gap-4 mt-4">
                <input type="checkbox" />
                <span>I agree to the Terms of Service and Privacy Policy.</span>
              </div>
            </div>
            <div className="mt-14"></div>
            <button
              type="submit"
              className="p-4 text-xl text-white font-bold bg-green-400 mb-20 rounded-md w-full "
            >
              Book Now
            </button>
          </form>
          <div className="hidden md:block relative w-[30%]">
            <div className="sticky top-0 w-full border rounded-lg p-4 border-gray-500">
              <div className="border-b border-gray-300 text-center text-xl pb-4 uppercase">
                Booking Summary
              </div>
              <div className="flex gap-2 mt-8 justify-between items-end">
                <div className="flex gap-6">
                  <FcHome className="text-4xl" />
                  <div>
                    {bedRoom} Bedroom{" "}
                    <ul className="ml-4 list-disc ">
                      <li>{kitchen} kitchen</li>
                      <li>{bathRoom} bathroom</li>
                    </ul>
                    {data.map((item) => {
                      return <p className="uppercase mt-4">+ Clean {item}</p>;
                    })}
                  </div>
                </div>
                <div>
                  {
                    (price =
                      bedRoom * 15 +
                      bathRoom * 20 +
                      kitchen * 40 +
                      price -
                      75 +
                      total)
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
