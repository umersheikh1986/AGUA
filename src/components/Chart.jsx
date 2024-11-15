import React from 'react'
import PieChart3D from './Piechart'
import CanvasScene from './Animate'
import { useEffect,useRef } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function Chart() {

  const data = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 300 },
    { name: 'Category D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  


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
    <>
    {/* <div className='md:flex mt-20 w-full h-[600px] space-x-20 justify-center'>
       <img className='h-[500px] md:w-2/6' src="https://n1t.301.myftpupload.com/wp-content/uploads/2021/04/Picture11.png" alt="" />
       <img className='md:w-2/5' src="https://n1t.301.myftpupload.com/wp-content/uploads/2021/03/Picture2.png" alt="" />
    </div>
 <img ref={divleft} className='h-auto w-4/5 md:w-1/3' src="https://n1t.301.myftpupload.com/wp-content/uploads/2021/04/Picture11.png" alt="" />
 <hr className="border-[#D2BA57]" /> */}
 <div className='flex flex-col md:flex-row mt-20 w-full h-auto space-y-10 md:space-y-0 md:space-x-20 justify-center items-center'>
 {/* <CanvasScene /> */}
 
  <div className='md:w-2/4 w-full p-16 font-times h-full'>
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

<hr className="border-[#D2BA57] mt-10" />

 </>
  )}

export default Chart