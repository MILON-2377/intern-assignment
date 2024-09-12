"use client";

import { usePathname, useRouter } from "next/navigation";
import AnimateNabLinks from "./AnimateNabLinks";

export default function Navbar() {
  const path = usePathname();
  const { push } = useRouter();

  return (
    <div className="w-full bg-black p-2 rounded-2xl flex items-center sm:gap-5 sm:justify-center justify-between">
      {[...nabLinks].map((item, idx) => (
        <AnimateNabLinks
          key={idx + 1}
          item={item}
          path={path}
          push={push}
        />
      ))}
    </div>
  );
}

// navbar links
const nabLinks = [
  {
    title: "About me",
    path: "/",
  },
  {
    title: "Experience",
    path: "/experience",
  },
  {
    title: "Recommended",
    path: "/recommended",
  },
];
