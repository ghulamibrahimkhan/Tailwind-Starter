import Image from 'next/image'
import React from 'react'

export const ProfileCardGrid = () => {
  return (
    <>
      <div className='bg-slate-300 max-w-7xl justify-center content-center  pb-3 grid grid-cols-[repeat(3,300px)] justify-items-center h-96 gap-3'>
        <div className="h-72 grid bg-white justify-items-center text-center p-3">
          <Image src="/male.jpeg" width="100" height="100" alt="image" />
          <p className='mt-3'><strong>Matt Cooper</strong> is a graphic designer at CircleAi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className=' text-teal-700 mt-4'>View Profile</p>
        </div>
        <div className=" h-72 grid bg-white text-center justify-items-center p-3">
          <Image src="/male.jpeg" width="100" height="100" alt="image" />
          <p className='mt-3'><strong>Matt Cooper</strong> is a graphic designer at CircleAi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className=' text-teal-700 mt-4'>View Profile</p>
        </div>
        <div className=" h-72 grid bg-white justify-items-center text-center p-3">
          <Image src="/male.jpeg" width="100" height="100" alt="image" />
          <p className='mt-3'><strong>Matt Cooper</strong> is a graphic designer at CircleAi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className=' text-teal-700 mt-4 '>View Profile</p>
        </div>
      </div >


    </>
  )
}
