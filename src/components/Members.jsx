import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { useEffect,useState,useRef } from 'react';
import CanvasScene from './Animate';

const Members = () => {
  const blockRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Optional: Stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }
  }, []);

  return (
    <>
    <div>
        <p className='text-center text-gray-300 font-bold mt-10 font-times '>OUR AMAZING</p>
        <p className='text-center text-white text-4xl font-times font-extrabold'>Team Of Experts</p>
    </div>
    <div ref={blockRef} className={`flex flex-wrap justify-center gap-8 mt-10${isVisible ? 'animate-appear' : 'opacity-0'}`} >
            <div className="bg-customgray card w-96 shadow-xl ">
           <figure className="px-10 pt-10">
    <img
      src="https://agcoin.io/wp-content/uploads/2021/04/martin-photo2.jpg"
      alt="Shoes"
      className="rounded-xl h-[350px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white"><b>Martin Mobarak</b></h2>
    <p className='text-white'><b>Founder, CEO</b></p>
   
  </div>
</div>

<div className="card bg-customgray  w-96 shadow-xl">
           <figure className="px-10 pt-10">
    <img
      src="https://agcoin.io/wp-content/uploads/2021/03/oscar-photo-e1616786798745.jpg"
      alt="Shoes"
      className="rounded-xl h-[350px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white"><b>Oscar Jarquin</b></h2>
    <p className='text-white'><b>CO-FOUNDER</b></p>
    
  </div>
</div>

<div className="card bg-customgray w-96 shadow-xl">
           <figure className="px-10 pt-10">
    <img
      src="https://agcoin.io/wp-content/uploads/2021/03/omar-e1616787014904.jpg"
      alt="Shoes"
      className="rounded-xl h-[350px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white"><b>Omar Mobarak</b></h2>
    <p className='text-white'><b>CO-FOUNDER</b></p>
    
  </div>
</div>

<div className="card bg-customgray w-96 shadow-xl">
           <figure className="px-10 pt-10">
    <img
      src="https://agcoin.io/wp-content/uploads/2021/03/bryan-photo-e1616786841161.jpg"
      alt="Shoes"
      className="rounded-xl h-[350px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white"><b>Bryan Cohen</b></h2>
    <p className='text-white'><b>COB</b></p>

  </div>
</div>

<div className="card bg-customgray w-96 shadow-xl">
           <figure className="px-10 pt-10">
    <img
      src="https://agcoin.io/wp-content/uploads/2021/03/Hans.jpg"
      alt="Shoes"
      className="rounded-xl h-[350px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white"><b>Hans Kuhn</b></h2>
    <p className='text-white'><b>Legal Avisor</b></p>
  </div>
</div>
    </div>
    </>
  )
}

export default Members


// flex flex-wrap justify-center gap-8 mt-10