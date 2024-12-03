import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }
        else{
            setVisible(false)
        }
    },[location])
  return showSearch && visible ? (
    <div className='text-center'>
        <div className='inline-flex items-center justify-center border-b border-gray-400 px-5 py-2 my-5 mx-3  w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e)=> setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-[2vw] font-light text-center' type="text" placeholder='Search...' />
        </div>
    </div>
  ) : null
}

export default SearchBar