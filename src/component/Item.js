import React, { useContext } from 'react'

import { CartContext } from './Cart';

const Item = (props) => {
    let {
        id,
        title,
        price,
        img,
        quantity,
        description
    } = props;

    const { removeItem, increment , decrement } = useContext(CartContext)

    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={img} alt="" />
                </div>

                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="add-minus-quantity">
                    <i className="fas fa-minus minus " onClick={()=>decrement(id)}></i>
                    <input type="text" placeholder={quantity} disabled />
                    <i className="fas fa-plus add" onClick={() => increment(id)}></i>
                </div>

                <div className="price">
                    <h3>{price} ₹</h3>
                </div>

                <div className="remove-item">
                    <i onClick={() => removeItem(id)} className="fas fa-trash-alt remove"></i>
                </div>


            </div>
            <hr />
        </>
    )
}

export default Item