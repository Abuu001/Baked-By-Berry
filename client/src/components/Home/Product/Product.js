import React from 'react'
import { useStateValue } from '../../ContextAPI/StateProvider'
import "./Product.css"

function Product({title,image,price,rating,alternative,id}) {

    const [{basket},dispatch] = useStateValue();

    const addToBasket=()=>{
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                title,
                image,
                rating,
                alternative,
                price,
                id
            }
        })
    }

    return (
        <div className="Product">
               <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price.toFixed(2)}</strong>
                    </p>
                    <div className="product__rating">
                        <p>{rating  ?  "🌟".repeat(rating) : "No Rating"}</p>
                    </div>
                </div> 
                <img
                    alt={alternative}
                    src={image} />
                <button onClick={addToBasket}>Add To Basket </button>
       
        </div>
    )
}

export default Product
