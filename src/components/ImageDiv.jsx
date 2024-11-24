import { motion } from "framer-motion";
import img from "../../public/top-view-unrecognizable-hacker-performing-cyberattack-night.jpg";
import Image from "next/image";
import { useState } from "react";

export default function ImageDiv() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="w-[50vw] h-[50vh] hover:border  hover:border-blue-500 hover:cursor-pointer relative overflow-hidden" // Overflow hidden to contain sliding images
    >
      <div className="w-full h-full">
        {/* Image that moves to the left */}
        <motion.div
          initial={false}
          animate={{ x: isHover ? "-100%" : "0%" }}
          transition={{ duration: 0.4, 
            damping: 500,
            ease: "easeInOut" }}
          className="w-full h-full absolute top-0 left-0"
        >
          <Image src={img} alt="image" fill priority className="object-cover" />
        </motion.div>

        {/* Image that slides in from the right */}
        <motion.div
          initial={false}
          animate={{ x: isHover ? "0%" : "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut",
            damping:500
           }}
          className="w-full h-full a"
        >
          <Image
            src={img} // Use a different image if needed
            alt="image"
            fill
            className="w-full object-cover absolute top-0 -right-100 h-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
