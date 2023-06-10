import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeFoter from "@/components/HomeFoter";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";
import { FcPhone } from "react-icons/fc";

function success() {
  const router = useRouter();
  const name = router.query.name;

  return (
    <>
      <Header />
      <main>
        <div className="text-center mt-32">
          thank you {name}, you booked an appointment successfully. We will
          contact you soon as possible or call us if you want to check it{" "}
        </div>
        <div className="flex justify-center mt-8">
          <a href={`tel:1-781-367-6258`}>
            <button className="bg-[#a1be3a] text-sm  shadow-lg shadow-cyan-500/50 text-white px-6 py-3 rounded-xl w-fit flex items-center gap-2">
              <FcPhone />
              Call Now
            </button>
          </a>
        </div>
        <div className="mt-32"></div>
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

export default success;
