import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img src={image[0]} className='h-60 object-cover hover:scale-110 transition ease-in-out' alt="" />
        </div>
        <p className='pt-3 py- 1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency} {price}</p>

    </Link>
  )
}

export default ProductItem