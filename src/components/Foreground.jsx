import React, {useRef,} from "react";
import Cards from "./Cards";
import { motion } from "framer-motion"

const Foreground = () => {
  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mbv",
      close: false,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"}
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mbv",
      close: true,
      tag: {isOpen: true, tagTitle: "Update", tagColor: "blue"}
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mbv",
      close: false,
      tag: {isOpen: true, tagTitle: " Upload", tagColor: "green"}
    },
    
  ];

  const ref = useRef(null)
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Cards data={item} key={index} reference={ref}/>
        ))}
      </div>
    </>
  );
};

export default Foreground;
