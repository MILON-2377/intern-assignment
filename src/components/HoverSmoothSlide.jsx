import { motion } from "framer-motion";
import img from "../../public/top-view-unrecognizable-hacker-performing-cyberattack-night.jpg";
import Image from "next/image";
import { useState } from "react";

export default function HoverSmoothSlide() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className=" relative w-[50vw] h-[50vh] overflow-hidden "
    >
      <Image
        src={img}
        alt="hove slide image"
        fill
        className="w-full h-full relative
        bg-transparent
        object-cover"
      />

      <motion.div
        initial={false}
        animate={{
          x: isHover ? "0%" : "-100%",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="
      w-full h-full bg-blue-100
      absolute top-0 left-0
     mix-blend-overlay
      "
      ></motion.div>
    </div>
  );
}
