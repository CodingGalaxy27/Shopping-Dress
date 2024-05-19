import React from 'react'
import arrow_icon from './shoppingAssets.jsx/arrow.png'
import hero_imae from './shoppingAssets.jsx/hero_image.png'
import hand_icon from './shoppingAssets.jsx/hand_icon.png'
import './Hero.css'
const Hero = () => {
  return (
    <>
    <div className="Hero">
  
   <div className='hero-left'>
    <h2>NEW ARRIVALS ONLY</h2>
    <div>
      <div className='hero-hand-icon'>
        <p >new</p>
        <img src={hand_icon} alt=''></img>
      </div>
      <p className='pc'>collections</p>
      <p >for everyone</p>
    </div>
    <div className='hero-latest-btn'>

      <div>Latest collections</div>
      <img src={arrow_icon}></img>
    </div>
   </div>
   <div className='hero-right'>
    <img src={hero_imae}></img>
   </div>
    </div>
    
            </>
  )
}

export default Hero
