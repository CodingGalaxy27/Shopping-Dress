import React from 'react'
import  './Productdisplay.css'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
const Productdisplay = (props) => {
    
    const{product}=props
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            </div>
            <div className='productdisplay-img' >
                <img className='productdisplay-main-img' src={product.image}></img>

            </div>
        </div>  
        <div className='productdisplay-right'>
           <h2>{product.name}</h2>
           <div className='productdispaly-right-star'>
            <img src={star_icon} alt=''></img>
            <img src={star_icon} alt=''></img>
            <img src={star_icon} alt=''></img>
            <img src={star_icon} alt=''></img>
            <img src={star_dull_icon} alt=''></img>
            <p>(122)</p>
           
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-price-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-discription'>
                A lightweight
           </div>
           <div className='productdisplay-right-size'>
            <h2>Select Size</h2>
            <div className='productdisplay-right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>XL</div>
                <div>XXL</div>
             
            </div>
           </div>
           <button className='adbtn'>ADD TO CART</button>
           <p className='productdisplay-right-category'>
            <span>Category:</span>Women,Tshirt,crop
           </p>
           <p className='productdisplay-right-categorys'>
            <span>Category:</span>Tags,Modern,left
           </p>
        </div>
    </div>
  )
}

export default Productdisplay
