import React, { createContext, useReducer } from 'react';
import "./cart.css"

import { products } from './Products';
import Contextcart from './Contextcart';
import { reducer } from './reducer';


export const CartContext = createContext();
const Cart = () => {

    let initalstate = {
        items: products,
        totalAmount: 0,
        totalItem: 0,
    }
    const [state, dispatch] = useReducer(reducer, initalstate)


    let removeItem = (id) => {
        console.log("dsfgfgdf")
        console.log("now using displatech to make fnc run ")
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })

    }


    return (
        <>
            <CartContext.Provider value={{...state , removeItem}}>
                <Contextcart />
            </CartContext.Provider>

        </>
    )
}

export default Cart