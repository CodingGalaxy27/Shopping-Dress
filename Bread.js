import React from 'react'

import handIcon from '../shoppingAssets.jsx/breadcrum_arrow.png';
import './Bread.css'
const Bread = (props) => {
    const {product}=props
  return (
    <div className='breadcrum'>
         Home<img src={handIcon} alt=''/>Shop <img src={handIcon} alt=''/>{product.category} <img src={handIcon}></img>{product.name}
      <p>op</p>
    </div>
  )
}

export default Bread
