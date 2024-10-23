import React from 'react'
import PieChart3D from './Piechart'
import CanvasScene from './Animate'
import { useEffect,useRef } from 'react';

function Chart() {
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

 <hr className="border-[#D2BA57]" /> */}
 <div className='flex flex-col md:flex-row mt-20 w-full h-auto space-y-10 md:space-y-0 md:space-x-20 justify-center items-center'>
 <CanvasScene />
  <img ref={divleft} className='h-auto w-4/5 md:w-1/3' src="https://n1t.301.myftpupload.com/wp-content/uploads/2021/04/Picture11.png" alt="" />
  <img ref={divright} className='h-auto w-4/5 md:w-1/3' src="https://n1t.301.myftpupload.com/wp-content/uploads/2021/03/Picture2.png" alt="" />
</div>

<hr className="border-[#D2BA57] mt-10" />

 </>
  )}

export default Chart