import React from 'react'
import CanvasScene from './Animate'

export const Youtube = () => {
  return (
    <>
    <div className='mt-20 items-center justify-center flex '>
      <CanvasScene />
       <iframe className='border-2 border-customBrown z-10' width="80%" height="615" src="https://www.youtube.com/embed/Uaijo3pjOTk?si=yzgPQmjwvxK0tuGx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </>
  )
}
