"use client";

import Loaders from "@/components/samples/Loaders";
import Shatter from "@/components/samples/Shatter";
import { useState } from "react";

export default function LoadingSpinner() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className=" relative w-full h-full ">
      <Loaders visible={setIsVisible} />
      <Shatter visible={isVisible} />
    </div>
  );
}
