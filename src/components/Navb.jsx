import React from 'react'

function Navb() {
  return (
    <div className="navbar opacity-80 z-50 border-b-lightgold border-x-black border-t-black border-2 bg-[#0F0D06]">
  <div className="navbar-start">
  

    <div className="dropdown">

      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow opacity-80 z-50 bg-[#030201]">
        <li style={{ cursor: "pointer" }} className="text-2xl text-[#949798] hover:text-lightgold"><a>About</a></li>
        <li  style={{ cursor: "pointer" }} className="text-2xl text-[#949798] hover:text-lightgold"><a>Docs</a></li>
        <li  style={{ cursor: "pointer" }} className="text-2xl text-[#949798] hover:text-lightgold"><a>Ecosystem</a></li>
      </ul>
    </div>
    <img src="/Agua-new-logo.png" className="h-12 w-12 md:h-20 md:w-20 sm:ml-16 " alt="Flowbite Logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className="block py-2 px-3 text-2xl text-[#949798] hover:text-lightgold"><a>Home</a></li>
      <li  style={{ cursor: "pointer" }} className="block py-2 px-3 text-2xl text-[#949798] hover:text-lightgold"><a>About</a></li>
      <li  style={{ cursor: "pointer" }} className="block py-2 px-3 text-2xl text-[#949798] hover:text-lightgold"><a>Docs</a></li>
      <li  style={{ cursor: "pointer" }} className="block py-2 px-3 text-2xl text-[#949798] hover:text-lightgold"><a>Ecosystem</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mr-2 sm:mr-10">SignIn</a>
    <a className="btn sm:mr-10">Connect<br /> Wallet</a>
  </div>
</div>
  )
}

export default Navb