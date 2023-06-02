import Image from "next/image";
import React, { useState } from "react";

type Props = {
  Dir: string;
  title: string;
  price: number;
  onClick: (obj: { title: string; isSelected: boolean; price: number }) => void;
};
function Extra({ Dir, title, onClick, price }: Props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (event: any) => {
    if (event.target.checked === true) {
      onClick && onClick({ title, isSelected: true, price });
      setClicked(true);
    } else {
      onClick && onClick({ title, isSelected: false, price });
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
        <span className={`${clicked ? "text-green-400" : ""} uppercase mt-2}`}>
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
