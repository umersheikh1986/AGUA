import React from "react";

export const ThreeCard = () => {
  return (
    <div className="mx-auto  mt-60  py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-[450px] mb-20 ">
        <div className="flex items-center justify-center">
          <div className="w-full relative h-[450px] mx-5  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg   p-6">
            {/* <!-- Content goes here --> */}
            <div className="absolute -top-28 left-12">
              <img className="w-80 h-80" src="3Dbanklocker.png" alt="locker" />
            </div>
            <div className="relative top-48 px-6">
              <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
              <p className="text-gray-300  text-sm text-start relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <p className="text-gray-300  text-sm  text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full relative h-[450px] mx-5  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg   p-6">
            {/* <!-- Content goes here --> */}
            <div className="absolute -top-28 left-12 ">
              <img className="w-80 h-80" src="3Dmoneycash.png" alt="locker" />
            </div>
            <div className="relative top-48 px-6">
              <h2 className="text-white text-2xl text-center">
                Best Exchange Rate{" "}
              </h2>
              <p className="text-gray-300  text-sm  text-center relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className="text-gray-300  text-sm  text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full relative h-[450px] mx-5  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg   p-6">
            {/* <!-- Content goes here --> */}
            <div className="absolute -top-28 left-12">
              <img
                className="w-80 h-80"
                src="3Dpaymentdeadline.png"
                alt="locker"
              />
            </div>
            <div className="relative top-48 px-6">
              <h2 className="text-white text-2xl text-center">
                Quick Transfers
              </h2>
              <p className="text-gray-300 text-sm  text-center relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className="text-gray-300  text-sm text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
