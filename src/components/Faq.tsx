import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
type Props = {
  title: string;
  content: string;
};
function Faq({ title, content }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="bg-white shadow-myShadow p-4 font-medium flex justify-between items-center"
      >
        {title}
        <AiFillCaretDown />
      </div>
      <div
        className={`${
          open ? "" : "hidden"
        } bg-white shadow-lg p-4 flex flex-col gap-2`}
      >
        {content}
      </div>
    </div>
  );
}

export default Faq;
