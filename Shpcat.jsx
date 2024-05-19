import React from 'react'
import Hero from './Hero'
import Popoular from './shoppingAssets.jsx/Popoular'
import Offers from './shoppingAssets.jsx/Offers'
import NewCollections from './NewCollections'
import Newsletter from './shoppingAssets.jsx/Newsletter'
import Product from './shoppingAssets.jsx/Product'
const Shpcat = () => {
  return (
    <div>
      <Hero/>
      <Popoular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      {/* <Product/> */}
    </div>
  )
}

export default Shpcat
