"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Element } from "react-scroll";

export default function Gallery() {
  const [images, setImages] = useState(Images);
  const scrolRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrolRef.current) {
      scrolRef.current.scrollLeft -= 230;
    }
  };

  const handleScrollRight = () => {
    if (scrolRef.current) {
      scrolRef.current.scrollLeft += 230;
    }
  };

  // add image handle
  const addImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = reader.result;
        setImages([...images, newImage]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      {/* Gallery Navigation */}
      <Element name="galleryNav">
        <div className="flex sm:flex-row flex-col gap-5 sm:items-center justify-between">
          <div className="px-4 py-3 text-sm rounded-xl text-white bg-black">
            Gallery
          </div>
          <div className=" w-full sm:w-[40%] flex items-center justify-between">
            <label
              htmlFor="file-input"
              className="px-4 py-3 hover:cursor-pointer rounded-xl text-white bg-gray-700 text-[12px] transition-all active:bg-opacity-80 active:scale-95"
            >
              <span className="mr-2 font-bold ">+</span>
              ADD IMAGE
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={addImage}
              className="hidden"
            />

            <div className=" gap-1 sm:w-[30%] flex items-center justify-between">
              <button
                onClick={handleScrollLeft}
                className="w-7 h-7 hover:bg-gray-700 hover:text-gray-300 rounded-full bg-black flex items-center justify-center"
              >
                <IoIosArrowRoundBack className="text-2xl text-gray-400" />
              </button>
              <button
                onClick={handleScrollRight}
                className="w-7 h-7 hover:bg-gray-700 hover:text-gray-300 rounded-full bg-black flex items-center justify-center"
              >
                <IoIosArrowRoundForward className="text-2xl text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </Element>

      {/* Images Display Section */}
      <Element name="imageGallery">
        <div
          ref={scrolRef}
          className="flex items-center px-2 gap-5 overflow-x-scroll scroll-smooth no-scrollbar mt-8"
        >
          {images?.map((item, idx) => (
            <Image
              key={idx}
              src={item}
              alt={`Image ${idx + 1}`}
              width={220}
              height={200}
              style={{ objectFit: "cover" }}
              className="rounded-xl min-w-[220px] min-h-[200px] max-w-[221px] max-h-[201px]  "
            />
          ))}
        </div>
      </Element>
    </div>
  );
}

const Images = [
  "https://img.freepik.com/free-photo/portrait-young-beautiful-brunette-woman-girl-model-with-nude-makeup-colorful-summer-pink-hipster-clothes-posing-near-wall-looking-happily_158538-8864.jpg?t=st=1726074776~exp=1726078376~hmac=17dfff56a5b3bb4462429de2a99669e5f1c834e2602e1733f6cb2aea09e161ed&w=900",
  "https://img.freepik.com/free-photo/portrait-young-beautiful-brunette-woman-girl-model-with-nude-makeup-colorful-summer-pink-hipster-clothes-posing-near-wall-looking-happily_158538-8864.jpg?t=st=1726074776~exp=1726078376~hmac=17dfff56a5b3bb4462429de2a99669e5f1c834e2602e1733f6cb2aea09e161ed&w=900",
  "https://img.freepik.com/free-photo/portrait-young-beautiful-brunette-woman-girl-model-with-nude-makeup-colorful-summer-pink-hipster-clothes-posing-near-wall-looking-happily_158538-8864.jpg?t=st=1726074776~exp=1726078376~hmac=17dfff56a5b3bb4462429de2a99669e5f1c834e2602e1733f6cb2aea09e161ed&w=900",
];
