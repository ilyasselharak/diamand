import Image from "next/image";
import Link from "next/link";
import { FcHome, FcCallback, FcPlanner } from "react-icons/fc";
import { GiVacuumCleaner } from "react-icons/gi";

function Header() {
  return (
    <>
      <header className="h-[40px] bg-green-200 text-xl flex items-center justify-center font-bold text-green-600">
        10% Off Your First Book
      </header>
      <div className=" shadow-myShadow">
        <div className="flex items-center justify-center flex-wrap md:justify-between w-[80%] mx-auto p-4">
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                className="w-[200px] h-[90px] md:w-[250px] md:h-[100px]"
                width={250}
                height={150}
                alt="logo"
              />
            </Link>
          </div>
          <div className=" text-xl flex-wrap gap-6  justify-center md:flex hidden  items-center">
            <Link
              href={"/"}
              className=" flex gap-1 items-center text-blue-400 sm:text-3xl"
            >
              <FcHome />
              Home
            </Link>
            <Link
              href={"/Booking/Standard"}
              className="flex gap-1 items-center"
            >
              <FcPlanner />
              Book
            </Link>
            <Link href={"/"} className="flex gap-1 items-center">
              <FcCallback /> Contact
            </Link>
            <Link href={"/"} className="flex gap-1 items-center">
              <GiVacuumCleaner />
              Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
