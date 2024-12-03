import React from 'react'
import {assets} from "../assets/assets"

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center bg-[#111111] justify-between py-1 px-[4%] rounded-full m-4 drop-shadow-md'>
        <img className='w-[10vw]' src={assets.logo} alt="" />
        <button onClick={()=> setToken('')} className='bg-sky-50 text-[#111111] font-lg px-5 py-2 sm:px-7 sm:py-2 rounded-full text-sm'>Logout</button>
    </div>
  )
}

export default Navbar