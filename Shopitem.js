import React from 'react'
import './Shopitem.css'
import { Link } from 'react-router-dom'
import product from './shoppingAssets.jsx/Product'
import Product from './shoppingAssets.jsx/Product'
const Shopitem = (props) => {
  var string = 'this is a string';

console.log(`Insert a string here: ${string}`);  
  return (
    <div className='item'>
    <Link to={`/product/${props.id}`}> <img src={props.image} alt=""/></Link>
    <p>{props.name}</p>
    <div className='item-prices'>
        <div className='item-price-name'>${props.new_price}</div>
        <div className='item-price-old'>
           ${props.old_price}
        </div>
    </div>
</div>
  )
}

export default Shopitem
