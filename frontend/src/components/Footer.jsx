import Eyes from './Eyes'

const Footer = () => {
  return (
    <div className='bg-[#111111] py-4 flex flex-col text-sky-50'>
        <div className='bg-blue-300 h-[20vw] mx-[5vw] rounded-2xl items-center justify-between text-[#111111] hidden md:flex'>
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
                devji0335@gmail.com
              </a>
              <a
                href="#"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                8650655334
              </a>
            </div>
            <div className=' flex-col items-start gap-2 hidden md:flex'>
            <p className="text-lg md:text-xl text-gray-400">Help</p>
              <a
                href="https://www.google.com/maps/place/Shyam+Shoes/@27.556012,78.6589833,17z/data=!4m8!3m7!1s0x39750201798db2e5:0x40cb028e763599a2!8m2!3d27.5560073!4d78.6615582!9m1!1b1!16s%2Fg%2F11bxg54tm4?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                className='text-sm md:text-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Find a store
              </a>
            </div>
        </div>
        <div className='copyright w-full text-center text-xs p-4'>
          © 2025 Ashish. All rights reserved.
        </div>
    </div>
  )
}

export default Footer