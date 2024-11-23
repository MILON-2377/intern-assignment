"use client";

import Button1 from "@/buttons/button1";
import Loaders from "@/components/samples/Loaders";
import Shatter from "@/components/samples/Shatter";
import { useState } from "react";

export default function Sample() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
    className="
    relative
    "
    >
        <Loaders visible={setIsVisible} />
        <Shatter visible={isVisible} />

        {/* <Button1 /> */}
      
    </div>
  )
}
