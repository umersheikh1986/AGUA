import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSlider from "./swiper/HeroSlider";
import CanvasScene from "./Animate";
import ThreeLensflare from "./Three";
import CoinAnimation from "./Animate";

export const HeroSection = () => {
  return (
    <>
    <div className="grid  grid-cols-1 md:grid-cols-2 h-[550px]">
    {/* <CanvasScene /> */}
    <CoinAnimation />
    {/* <ThreeLensflare /> */}
      {/* Text Section */}
      <div className="flex-1 ml-20 flex flex-col justify-center z-10  rounded-lg  p-5">
        <h2 className="text-6xl text-white font-bold mb-2">
          A STABLE SILVER &
        </h2>
        <h2 className="text-6xl text-white font-bold mb-2"> GOLD THAT HELPS</h2>
        <h2 className="text-5xl font-semibold text-yellow-600 my-4">
          <span className="text-[#c9cbcc] text-5xl "> YOU WIN</span> THE GAME
        </h2>

        <p className="text-lg text-gray-200 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>

        <div className="mt-5 flex flex-wrap md:flex-nowrap gap-4">
          <Link
            href={"/"}
            className="border-2 px-20 py-4 bg-black text-white font-semibold rounded-sm hover:bg-gray-800 cursor-pointer"
          >
            OUR OFFERS
          </Link>
          <Link
            href={"/"}
            className=" border-2 border-white bg-gradient-to-r from-[#353535]  via-[#CBCDCF] via-30% to-[#6C6C6C]
            to-70% bg-blend-multiply px-20 py-4 text-black font-semibold rounded-sm hover:bg-[#fad55a] cursor-pointer"
          >
            {/* {" "} */}
            CREATE CARDS
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center z-10 items-center">
        <div className="relative w-full h-full flex justify-center items-center">
          {/* <img
            src="/gold.png"
            alt="golden-card"
            className="w-[500px] h-[450px]"
          /> */}
          <HeroSlider />
        </div>
      </div>
    </div>
    </>
  );
};
