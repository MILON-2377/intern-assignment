"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  return (
    <div className=" w-full bg-black p-1 rounded-2xl flex items-center sm:gap-5 sm:justify-center justify-between ">
      {[...nabLinks].map((item, idx) => (
        <Link
          key={idx}
          href={item.path}
          className={` ${
            item.path === path
              ? " bg-gray-700 bg-opacity-50 font-semibold text-white"
              : "text-gray-400 "
          } sm:px-4 px-2 py-2 rounded-xl text-[10px] sm:text-sm `}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

// navber links
const nabLinks = [
  {
    title: "About me",
    path: "/",
  },
  {
    title: "Experience",
    path: "/experinence",
  },
  {
    title: "Recommended",
    path: "/recommended",
  },
];
