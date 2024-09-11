"use client";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Gallery() {
  return (
    <div className="p-4">
      {/* gallery nav */}
      <div className="flex items-center justify-between">
        <button className="px-4 py-3 rounded-xl text-white bg-black">
          Gallery
        </button>
        <div className=" w-[40%] flex items-center justify-between">
          <button className=" px-4 py-3 rounded-xl text-white bg-gray-700 text-sm transition-all active:bg-opacity-80 active:scale-95 ">
            ADD IMAGE
          </button>
          <div className="w-[30%] flex items-center justify-between ">
            <button className=" w-7 h-7 rounded-full bg-black flex items-center justify-center ">
              <IoIosArrowRoundBack className=" text-2xl text-gray-400 " />
            </button>
            <button className=" w-7 h-7 rounded-full bg-black flex items-center justify-center ">
              <IoIosArrowRoundForward className=" text-2xl text-gray-400 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
