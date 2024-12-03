"use client";

import React from 'react'

function Pictures() {
  return (
    <div className='flex flex-wrap gap-6 items-center justify-center bg-opacity-10 mb-4 backdrop-blur-lg'>
    <div className="card card-side  w-150 bg-base-100 shadow-xl">
  <figure>
    <img
      src="/picture1.png"
      alt="Movie"
      className='h-100' />
  </figure>
  <div className="card-body bg-[#343025] rounded-r-xl">
    <h2 className="card-title">New movie is released!</h2>
    <p className='text-white'>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Info</button>
    </div>
  </div>
</div>

<div className="card card-side  w-150 bg-base-100 shadow-xl">
  <figure>
    <img
      src="/picture2.png"
      alt="Movie"
      className='h-100' />
  </figure>
  <div className="card-body bg-[#343025] rounded-r-xl">
    <h2 className="card-title">New movie is released!</h2>
    <p className='text-white'>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Info</button>
    </div>
  </div>
</div>

<div className="card card-side  w-150 bg-base-100 shadow-xl">
  <figure>
    <img
      src="/picture3.png"
      alt="Movie"
      className='h-100' />
  </figure>
  <div className="card-body bg-[#343025] rounded-r-xl">
    <h2 className="card-title">New movie is released!</h2>
    <p className='text-white'>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Info</button>
    </div>
  </div>
</div>

<div className="card card-side  w-150 bg-base-100 shadow-xl">
  <figure>
    <img
      src="/picture4.png"
      alt="Movie"
      className='h-100' />
  </figure>
  <div className="card-body bg-[#343025] rounded-r-xl">
    <h2 className="card-title">New movie is released!</h2>
    <p className='text-white'>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Info</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Pictures