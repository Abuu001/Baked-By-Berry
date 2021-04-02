import React from 'react'
import { useStateValue } from '../../ContextAPI/StateProvider';
import "./CheckoutProduct.css"

function CheckoutProduct({image,title,price,rating,alternative,id}) {
    
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className="CheckoutProduct">
            <img  className="checkoutProduct__image" src={image} alt={alternative}/>
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price"><small>$</small><strong>{price}</strong></p>
            <div className="checkoutProduct__rating">
                 <p>{rating  ?  "🌟".repeat(rating) : "No Rating"}</p>
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
        </div>
    )
}

export default CheckoutProduct
