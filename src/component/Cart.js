import React, { createContext, useReducer , useEffect} from 'react';
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
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })

    }
    let clearCart = () => {
        return dispatch({
            type : "CLEAR_CART"
        })

    }

    let increment = (id)=>{
        return dispatch({
            type : "INCREMENT" , 
            payload : id 
        })
    }


    let decrement =(id)=>{
        return dispatch({
            type : "DECREMENT" , 
            payload : id 
        })
    }


    useEffect(() => {
        dispatch({
            type : "GET_TOTAL"
        })
console.log("Dsfdfr")
    }, [state.items])
    
    return (
        <>
            <CartContext.Provider value={{ ...state, removeItem  , clearCart , increment , decrement}}>
                <Contextcart />
            </CartContext.Provider>

        </>
    )
}

export default Cart