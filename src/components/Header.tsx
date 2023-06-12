import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <div className="text-[#062c96] shadow-myShadow">
        <div className="flex font-mono font-bold items-center justify-center flex-wrap md:justify-between w-[80%] mx-auto p-4">
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
          <div className="mt-4 text-xl flex-wrap gap-6  justify-center md:flex hidden  items-center">
            <Link
              href={"/"}
              className={`flex gap-1 items-center ${
                path == "/" ? "text-blue-400 " : ""
              } `}
            >
              Hom
            </Link>
            <Link
              href={"/Booking/Standard"}
              className={` ${path.includes("Booking") ? "text-blue-400" : ""} `}
            >
              Book
            </Link>
            <Link
              scroll={false}
              href={"/#contact"}
              className="flex gap-1 items-center"
            >
              Contact
            </Link>
            <Link
              href={"/workplace"}
              className={` ${
                path.includes("workplace") ? "text-blue-400" : ""
              } `}
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
