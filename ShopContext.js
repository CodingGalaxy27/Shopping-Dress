import React,{createContext} from "react";
import all_product from "../shoppingAssets.jsx/all_product"
export const ShopContext=createContext(null);

const ShopContextProvider=(props)=>{
    const contextvalue={all_product}//{}-this bracket map ipdi podathaan contextla map la edukmoodiyum shop categoryla 
    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}

        </ShopContext.Provider>
    )
}
export default ShopContextProvider;