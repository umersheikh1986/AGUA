"use client";
import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

export const Navbar = () => {
  return (
    // <div>
    //   <nav
    //     // style={{
    //     //   background:
    //     //     "radial-gradient(circle at   10% 80%, #000000 45%, #a68b30 100%)",
    //     //   backgroundAttachment:
    //     //     "linear-gradient(135deg, #000000 65%, #a68b30 100%)",
    //     // }}
    //     className=" border-b-lightgold border-x-black border-t-black border-2"
    //   >
    //     <div className=" grid md:grid-cols-3 text-white items-center justify-between mx-auto p-0 ">
    //       <a
    //         href="/"
    //         className="flex items-center space-x-3 rtl:space-x-reverse"
    //       >
    //         <img
    //           src="/agua-logo.png"
    //           className="h-24 w-24 me-2 ml-12"
    //           alt="Flowbite Logo"
    //         />
    //         <span className="self-center text-2xl font-semibold whitespace-nowrap text-lightgold">
    //           AGUA
    //         </span>
    //       </a>
    //       <button
    //         data-collapse-toggle="navbar-default"
    //         type="button"
    //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="navbar-default"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-5 h-5"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>
    //       <div
    //         className="hidden w-full md:block md:w-auto gap-8"
    //         id="navbar-default"
    //       >
    //         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white ">
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 px-3 text-2xl text-lightgold "
    //               aria-current="page"
    //             >
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //           <a href="about" className="block py-2 px-3 text-2xl text-lightgold">
    //              About
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="block py-2 px-3 text-2xl text-lightgold">
    //               Services
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="block py-2 px-3 text-2xl text-lightgold ">
    //               Pricing
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="block py-2 px-3 text-2xl text-lightgold">
    //               Contact
    //             </a>
    //           </li>
    //           <li >
    //             <ConnectWallet style={{backgroundColor:'#E5AF1D',fontWeight:'bold',paddingLeft:'7px',border:'2px solid #534721',borderRadius:'20px'}} />
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>


  //   <div>
  //   <nav
  //     className="fixed opacity-80 top-0 left-0 w-full z-50 border-b-lightgold border-x-black border-t-black border-2 bg-black"
  //   >
  //     <div className="grid md:grid-cols-3 text-white items-center justify-between mx-auto p-0 ">
  //       <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
  //         <img src="/agua-logo.png" className="h-24 w-24 me-2 ml-12" alt="Flowbite Logo" />
  //         <span className="self-center text-2xl font-semibold whitespace-nowrap text-lightgold hover:text-[#949798]">AGUA</span>
  //       </a>
  //       <button
  //         data-collapse-toggle="navbar-default"
  //         type="button"
  //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //         aria-controls="navbar-default"
  //         aria-expanded="false"
  //       >
  //         <span className="sr-only">Open main menu</span>
  //         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
  //           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
  //         </svg>
  //       </button>
  //       <div className="hidden w-full md:block md:w-auto gap-8" id="navbar-default">
  //         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
  //           <li>
  //             <a href="#" className="block py-2 px-3 text-2xl text-lightgold hover:text-[#949798]" aria-current="page">
  //               Home
  //             </a>
  //           </li>
  //           <li>
  //             <a href="about" className="block py-2 px-3 text-2xl text-lightgold hover:text-[#949798]">
  //               About
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#" className="block py-2 px-3 text-2xl text-lightgold hover:text-[#949798]">
  //               Services
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#" className="block py-2 px-3 text-2xl text-lightgold hover:text-[#949798]">
  //               Pricing
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#" className="block py-2 px-3 text-2xl text-lightgold hover:text-[#949798]">
  //               Contact
  //             </a>
  //           </li>
  //           <li>
  //             <ConnectWallet
              
  //               style={{
  //                 backgroundColor: '#E5AF1D',
  //                 fontWeight: 'bold',
  //                 paddingLeft: '7px',
  //                 border: '2px solid #534721',
  //                 borderRadius: '20px',
  //               }}
  //             />


  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // </div>

  <div className="navbar fixed opacity-80 z-50 border-b-lightgold border-x-black border-t-black border-2 bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#9B8A40">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow opacity-80 z-50 bg-black">
        <li className="text-2xl text-lightgold hover:text-[#949798]"><a>Home</a></li>
        <li className="text-2xl text-lightgold hover:text-[#949798]"><a>About</a></li>
        <li className="text-2xl text-lightgold hover:text-[#949798]"><a>DOCS</a></li>
      </ul>
    </div>
    <img src="/agua-logo.png" className="lg:h-24 lg:w-24 h-12 w-12  lg:ml-12" alt="Flowbite Logo" />
    <a className="btn btn-ghost text-sm self-center sm:text-2xl font-semibold whitespace-nowrap text-lightgold hover:text-[#949798]">AGUA</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="block py-2 px-3 text-2xl text-lightgold hover:text-[#949798]"><a>Home</a></li>
      <li className="block py-2 px-3 text-2xl text-lightgold hover:text-[#949798]"><a>About</a></li>
      <li className="block py-2 px-3 text-2xl text-lightgold hover:text-[#949798]"><a>DOCS</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <ConnectWallet
              
                           style={{
                               backgroundColor: '#E5AF1D',
                               fontWeight: 'bold',
                               paddingLeft: '7px',
                               border: '2px solid #534721',
                               borderRadius: '20px',
                             }}
                           />
  </div>
</div>
  );
};
