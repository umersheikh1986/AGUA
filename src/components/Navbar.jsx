"use client";
import React from "react";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";

export const Navbar = () => {
  return (
    <div>
      <nav
        // style={{
        //   background:
        //     "radial-gradient(circle at   10% 80%, #000000 45%, #a68b30 100%)",
        //   backgroundAttachment:
        //     "linear-gradient(135deg, #000000 65%, #a68b30 100%)",
        // }}
        className=" border-gray-20"
      >
        <div className=" grid md:grid-cols-3  text-white items-center justify-between mx-auto p-8 ">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/agua-logo.png"
              className="h-24 w-24 me-2"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              AGUA
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto gap-8"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-2xl text-white "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
              <a href="about" className="block py-2 px-3 text-2xl text-white">
                 About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-2xl text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-2xl text-white ">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-2xl text-white">
                  Contact
                </a>
              </li>
              <li >
                <ConnectWallet />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
