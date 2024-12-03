import React from 'react'
import Eyes from './Eyes'

const NewFooter = () => {
  return (
    <div className='bg-[#111111] h-[48vw] md:h-[40vw] flex flex-col text-sky-50'>
        <div className='bg-[#bf111e] h-[20vw] mx-[5vw] rounded-b-2xl items-center justify-between text-[#111111] hidden md:flex'>
            <div className='left-heading w-[30%] h-full flex flex-col justify-center items-center ml-[5vw] p-4'>
              <h1 className='text-[4vw] md:text-[4vw] font-krona tracking-tight'>Let's Shop</h1>
            </div>
            <p className='h-[80%] border-[1px] border-[#111111]'></p>
            <div className='eyes w-[70%] h-full'>
              <Eyes />
            </div>
        </div>
        <div className='lower-part flex items-center justify-between px-[5vw] py-8'>
            <div className='flex flex-col items-start gap-2'>
            <p className="text-lg md:text-xl text-gray-400">Get in touch</p>
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                ashbhati26@gmail.com
              </a>
            </div>
            <div className='flex flex-col items-start gap-2'>
            <p className="text-lg md:text-xl text-gray-400">Connect</p>
              <a
                href="https://www.linkedin.com/in/ashbhati26/"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                LinkedIn
              </a>
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Instagram
              </a>
            </div>
            <div className=' flex-col items-start gap-2 hidden md:flex'>
            <p className="text-lg md:text-xl text-gray-400">Help</p>
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Customer Service
              </a>
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Contact
              </a>
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Find a store
              </a>
            </div>
        </div>
        <div className='copyright w-full text-center text-xs p-4'>
          © 2024 Ashish. All rights reserved.
        </div>
    </div>
  )
}

export default NewFooter