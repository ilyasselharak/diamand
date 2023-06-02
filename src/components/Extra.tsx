import Image from "next/image";
import React, { useState } from "react";

type Props = {
  Dir: string;
  title: string;
};
function Extra({ Dir, title }: Props) {
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
      <label className="flex flex-col items-center" htmlFor={title}>
        <div
          className={`${
            clicked ? "bg-green-400" : ""
          } border border-green-300 p-4 cursor-pointer rounded-md `}
        >
          <Image src={Dir} width={50} height={50} alt={title} />
        </div>
        <span className={`${clicked ? "text-green-400" : ""} mt-2}`}>
          {title}
        </span>
      </label>

      <input
        type="checkbox"
        name={title}
        id={title}
        onClick={(event) => handleClick(event)}
        className="hidden "
      />
    </>
  );
}

export default Extra;
