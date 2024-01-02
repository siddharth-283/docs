import React from "react";

import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const Cards = () => {
  return (
    <div className="relative w-60 h-72 text-white rounded-[50px] bg-zinc-900/90 px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold  ">
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>.4mb</h5>
          <span className="w-6 h-6 bg-zinc-300 flex  justify-center items-center rounded-full">
            <LuDownload size=".8em" color="#000" />
          </span>
        </div>
        <div className="tag w-full py-5 bg-green-300 flex items-center justify-center">
          <h3 className="text-sm font-semibold">Download Now</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
