"use client";
import { motion } from "framer-motion";

export default function AnimateNabLinks({ item, path, push }) {
  return (
    <motion.div
      key={item.path}
      onClick={() => push(item.path)}
      className={`${
        item.path === path
          ? "bg-gray-800 font-semibold text-white"
          : "text-gray-400"
      } sm:p-3 p-2 w-full text-center cursor-pointer rounded-xl text-[10px] sm:text-sm`}
    >
      <span className="relative z-10">{item.title}</span>
    </motion.div>
  );
}
