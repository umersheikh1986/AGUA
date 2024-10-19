import React from 'react'
import PieChart3D from './Piechart'
import CanvasScene from './Animate'

function Chart() {
  return (
    <>
    <div className='md:flex mt-20 w-full h-[600px] space-x-20 justify-center'>
      <CanvasScene />
       <img className='h-[500px] md:w-2/6' src="https://n1t.301.myftpupload.com/wp-content/uploads/2021/04/Picture11.png" alt="" />
       <img className='md:w-2/5' src="https://n1t.301.myftpupload.com/wp-content/uploads/2021/03/Picture2.png" alt="" />
    </div>

 <hr className="border-[#D2BA57]" />
 </>
  )}

export default Chart