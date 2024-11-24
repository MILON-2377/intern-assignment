"use client";

import LoadingSpinner from "@/loading/LoadingSpinner";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoadingWrapper({children}) {
  const [loading, setLoading] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setLoading(true);

    const timer = setInterval(() => {
        setLoading(false);
    },3000);

    return () => clearInterval(timer);
  },[pathName]);
  
  return(
    <>
    {loading && <LoadingSpinner />}
    {children}
    </>
  );
}
