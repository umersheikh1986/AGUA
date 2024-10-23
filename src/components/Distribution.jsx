import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import CanvasScene from './Animate';
import { useEffect,useRef } from 'react';

function Distribution() {
    const divleft = useRef(null);
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInLeft");
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );
    
    if (divleft.current) {
      observer.observe(divleft.current);
    }
    
    return () => {
      if (divleft.current) {
        observer.unobserve(divleft.current);
      }
    };
    }, []);

    const divright = useRef(null);
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInRight");
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );
  
    if (divright.current) {
      observer.observe(divright.current);
    }
  
    return () => {
      if (divright.current) {
        observer.unobserve(divright.current);
      }
    };
  }, []);

  return (
    <div className='md:flex lg:mt-0 mt-10'>
        <CanvasScene />
        <div ref={divleft} className='font-times p-16 w-full md:w-2/4'>
            <p className='font-extrabold text-4xl font-times text-white'>The roadmap  is consisted of five phases:</p>
              <div className='pt-8'>
                <div className='flex'>
                    <FaRegCircleCheck className='text-white text-4xl sm:te opacity-50' />
                    <p className='text-white font-bold pl-4'>Phase 1</p>
                </div>
            <p className="text-[#C7C7C7] pl-12">Complete AGC token offering for ongoing silver mine operations and technology development.</p>
                <div className='flex pt-4'>
                    <MdAccessTime className='text-white text-4xl sm:te opacity-50' />
                    <p className='text-white font-bold pl-4'>Phase 2</p>
                </div>
            <p className="text-[#C7C7C7] pl-12">AGC Parachain launch to inherit Polkadot security. Multi-asset pallet integration.</p>
                <div className='flex pt-4'>
                    <MdAccessTime className='text-white text-4xl sm:te opacity-50' />
                    <p className='text-white font-bold pl-4'>Phase 3</p>
                </div>
            <p className="text-[#C7C7C7] pl-12">AGC Vault dApp to go live.</p>
                <div className='flex pt-4'>
                    <MdAccessTime className='text-white text-4xl sm:te opacity-50' />
                    <p className='text-white font-bold pl-4'>Phase 4</p>
                </div>
            <p className="text-[#C7C7C7] pl-12">AGT token issued as digital representation of co-ownership rights in a specific silver bullion line with production of  more silver from AGC Mining Operations.</p>
                <div className='flex pt-4'>
                    <MdAccessTime className='text-white text-4xl sm:te opacity-50' />
                    <p className='text-white font-bold pl-4'>Phase 5</p>
                </div>
                </div>
            <p className="text-[#C7C7C7] pl-12">Double-Staking program initiated.</p>
        </div>


        <div ref={divright} className='md:w-2/4 w-full p-16 font-times h-full'>
            <p className='font-extrabold text-4xl pl-12 font-times text-white'>Token Distribution</p>
            <p className="text-[#C7C7C7] pl-12 pt-8">61% of AGC tokens shall be distributed in the market via a Security Token Offering campaign. AGC represents a security token and purchase of it requires a mandatory KYC/AML check.  Holders of AGC token will get a portion of the second token AGT as they are produced and according with their contribution.</p>
            <div className='flex justify-between pl-12 pt-8'>
                <p className='text-white'>Private Sale</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>7%</p>
            </div>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '7%' }}></div>
                </div>

                <div className='flex justify-between pl-12 pt-8'>
                <p className='text-white'>Pre-Public Sale</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>21%</p>
            </div>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '21%' }}></div>
                </div>

             <div className='flex justify-between pl-12 pt-8'>
                <p className='text-white'>Public sale</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>43%</p>
            </div>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '43%' }}></div>
                </div>

                <div className='flex justify-between pl-12 pt-8'>
                <p className='text-white'>Team</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>10%</p>
            </div>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '10%' }}></div>
                </div>

             <div className='flex justify-between pl-12 pt-8'>
                <p className='text-white'>Advisors</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>5%</p>
            </div>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '5%' }}></div>
                </div>       

              <div className='flex justify-between pl-12 pt-8'>
                <p className='text-white'>Developers Allocation</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>7%</p>
            </div>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '7%' }}></div>
                </div>       

              <div className='flex justify-between pl-12 pt-8'>
                <p className='text-white'>Marketing</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>5%</p>
            </div>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '5%' }}></div>
                </div>       

              <div className='flex justify-between pl-12 pt-8'>
                <p className='text-white'>Airdrop & Bounty</p>
                <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>2%</p>
            </div>
                <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
                    <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '2%' }}></div>
                </div>                 

        </div>


        
    </div>
  )
}

export default Distribution