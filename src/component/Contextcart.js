import React, { useState, useContext } from 'react'

import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './Item';
import { products } from './Products';
import { CartContext } from './Cart';
const Contextcart = () => {


    const { items  , clearCart, totalAmount , totalItem} = useContext(CartContext);

    if(items.length===0){
        return(
            <>
             <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>Continue Shopping</h3>
                </div>

                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart-icon" className='' />
                    <p>{totalItem}</p>
                </div>
            </header>

            <section className='main-cart-section'>
                <h1>Shopping Cart</h1>
                <p className="total-items">you have  <span className='total-items-count'>{totalItem}</span> items in yout cart </p>

             
                <div className="card-total">
                    <h3>Cart total : <span>{totalAmount}rs</span>

                    </h3>
                    <button>Checkout</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>




            </section>
            </>
        )
    }
    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>Continue Shopping</h3>
                </div>

                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart-icon" className='' />
                    <p>{totalItem}</p>
                </div>
            </header>

            <section className='main-cart-section'>
                <h1>Shopping Cart</h1>
                <p className="total-items">you have  <span className='total-items-count'> {totalItem}</span> items in yout cart </p>

                <div className="cart-items">
                    <div className="cart-items-container">

                        <Scrollbars >
                            {
                                items.map((x) => {
                                    let {
                                        id,
                                        title,
                                        price,
                                        img,
                                        quantity,
                                        description
                                    } = x;

                                    return <Item key={id} id = {id}    title={title} price={price} img={img} quantity={quantity} description={description} />
                                })
                            }

                        </Scrollbars>

                    </div>
                </div>

                <div className="card-total">
                    <h3>Cart total : <span>{totalAmount} rs</span>

                    </h3>
                    <button>Checkout</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>




            </section>
        </>
    )
}

export default Contextcart