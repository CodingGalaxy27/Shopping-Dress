import React from 'react'
import './offers.css'
import exclusive_image from '../shoppingAssets.jsx/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'> 
      <div className='offers-left'>
     <h1 className='ex'>Exclusive </h1>
     <h1 className='offer'>offers for you</h1>
   <p className='po'> ONLY ON BEST SELLERS PRODUCTS</p>
   <button className='obtn'> Check Now</button>
   </div>
   <div className='or'>
        <img src={exclusive_image} alt=''></img>
      </div>
      </div>
  )
}

export default Offers
