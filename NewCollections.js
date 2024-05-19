import React from 'react'
import './NewCollections.css'
import new_collections from './shoppingAssets.jsx/new_collections'
import Shopitem from './Shopitem'
const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1 className='h-newcoll'>NewCollections</h1>
        <hr/>
        <div className='newcollections-item'> 
            {new_collections.map((item,i)=>{
                return <Shopitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                
            })}
        </div>
        <hr/>
       
    </div>
  )
}

export default NewCollections
