"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../header";
import '../../styles/globals.css';

export default function DefaultLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative  flex border border-[#D2D8E1] dark:border-[#24303F] flex-1 flex-col bg-[#D2D8E1] lg:ml-72.5">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="bg-[#D2D8E1] dark:bg-[#24303F]">
            <div className="mx-auto bg-white dark:bg-[#D2D8E1]  rounded-3xl max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        <div className="bg-[#D2D8E1] border border-[#D2D8E1] dark:border-[#24303F] dark:bg-boxdark h-auto w-6 ]">
         
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
