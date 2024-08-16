import { createContext, useContext, useState } from "react";

export const FoodContext=createContext()
export const MyProvider=({children})=>{
    const[cart,setCart]=useState([]);
    const[totalPrice,setTotalPrice]=useState(0);
    return(
        <FoodContext.Provider value={{totalPrice,setTotalPrice,cart,setCart}}>
            {children}
        </FoodContext.Provider>
    )
}
 
