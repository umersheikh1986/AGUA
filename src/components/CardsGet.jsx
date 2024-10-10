import React from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import HiOutlineCamera from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";

export default function CardsGet() {
  return (
    <div className="mx-auto py-40">
      <div className="place-items-center text-white flex justify-center">
        <h2 className="text-3xl">HOW TO GET OUR CARDS</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 w-full h-[550px] ">
        <div class="flex items-center justify-center">
          <div class="w-full h-[450px] mx-5   rounded-lg   p-6">
            {/* <!-- Content goes here --> */}
            {/* <div className="absolute -top-28 left-12">
            <img className="w-80 h-80" src="3Dbanklocker.png" alt="locker" />
          </div> */}
            <div className=" top-48 px-6">
              <div className="place-items-center text-white flex justify-center">
                <FaRegArrowAltCircleDown className=" text-white w-8 h-8" />
              </div>
              <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
              <p className="text-gray-300  text-sm text-start relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p className="text-gray-300  text-sm  text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p></p>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center">
          <div class="w-full h-[450px] mx-5   rounded-lg   p-6">
            {/* <!-- Content goes here --> */}
            {/* <div className="absolute -top-28 left-12">
            <img className="w-80 h-80" src="3Dbanklocker.png" alt="locker" />
          </div> */}
            <div className=" top-48 px-6">
              <div className="place-items-center text-white flex justify-center">
                {/* <FaRegArrowAltCircleDown className=" text-white w-8 h-8" /> */}
                <HiOutlineCamera className=" text-white w-8 h-8" />
              </div>
              <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
              <p className="text-gray-300  text-sm text-start relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p className="text-gray-300  text-sm  text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="w-full h-[450px] mx-5   rounded-lg   p-6">
            {/* <!-- Content goes here --> */}
            {/* <div className="absolute -top-28 left-12">
            <img className="w-80 h-80" src="3Dbanklocker.png" alt="locker" />
          </div> */}
            <div className=" top-48 px-6">
              <div className="place-items-center text-white flex justify-center">
                {/* <FaRegArrowAltCircleDown className=" text-white w-8 h-8" /> */}
                <GoCreditCard className=" text-white w-8 h-8" />
              </div>
              <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
              <p className="text-gray-300  text-sm text-start relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p className="text-gray-300  text-sm  text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
