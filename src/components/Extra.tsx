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
    <div
      className={`${
        clicked ? "bg-green-400" : ""
      } border border-green-300 p-4 rounded-md `}
    >
      <label htmlFor={title}>
        <Image src={Dir} width={50} height={50} alt={title} />
      </label>
      <input
        type="checkbox"
        name={title}
        id={title}
        onClick={(event) => handleClick(event)}
        className="hidden"
      />
    </div>
  );
}

export default Extra;
