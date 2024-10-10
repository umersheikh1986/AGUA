import React from "react";

export const ProfitAbleLoan = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-5 ">
        <div className="flex flex-col gap-5 mt-10 bg-white bg-opacity-10 backdrop-blur-lg p-10">
          <h2 className="text-6xl font-bold text-white">Profitable Loans</h2>
          <div className="flex flex-col gap-5">
            <p className="text-white">
              1.Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <p className="text-white">
              2. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book
            </p>
            <p className="text-white">
              3. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10 bg-white bg-opacity-10 backdrop-blur-3xl p-5">
          <img
            className="w-[400px] shadow-2xl  rounded-[40px] bg-opacity-50 backdrop-blur-lg  h-[400px]"
            src="/CreditCards1.png"
            alt="locker"
          />
        </div>
      </div>
    </div>
  );
};
