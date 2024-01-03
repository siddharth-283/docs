import React from "react";
import { motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Cards = ({ data, reference }) => {
  

  return (
    <motion.div dragConstraints={reference} drag whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className="relative flex-shrink-0 w-60 h-72 text-white rounded-[50px] bg-zinc-900/90 px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold  ">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 bg-zinc-300 flex  justify-center items-center rounded-full">
            {data.close ? <LuDownload size=".8em" color="#000"/> : <IoClose size=".8em" color="#000"/> }
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-5 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-300"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) }
      </div>
    </motion.div>
  );
};

export default Cards;
