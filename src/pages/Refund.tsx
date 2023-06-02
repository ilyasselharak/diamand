import Header from "@/components/Header";
import HomeFoter from "@/components/HomeFoter";
import React from "react";
import { FcCancel } from "react-icons/fc";

export default function Refund() {
  return (
    <>
      <Header />
      <main>
        <div className="text-center text-4xl mt-6 font-bold ">
          Cancellation Policy
        </div>
        <div className="flex justify-center items-center mt-16">
          <FcCancel className="text-[400px] w-[50%]" />
          <div className="w-[50%] flex flex-col gap-4">
            <div className="text-4xl">
              24 Hours to Appointment
              <p className="md:w-[60%] text-base mt-4">
                If canceled with 24 hours to appointment, it is a full charge.
                Non refundable. Please understand your booking takes away from
                another customer who could have booked, so if cancelled same day
                its treated as a booking.
              </p>
            </div>
            <div className="text-4xl">
              48 Hours or Sooner
              <p className="md:w-[60%] text-base mt-4">
                If cancelled with 48 hours or sooner, it is eligible for credit.
                This means it's a cleaning credit applied to your account that
                can be used whenever you please.
              </p>
            </div>
            <div className="text-4xl">
              Before your 48 Hour window
              <p className="md:w-[60%] text-base mt-4">
                If you decide to cancel before the 48 hour window, you are
                eligible for an immediate full refund 🙂
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="h-[100px]"></div>
      <HomeFoter />
    </>
  );
}
