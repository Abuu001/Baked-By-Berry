import React from 'react'
import { useStateValue } from '../../ContextAPI/StateProvider';
import "./CheckoutProduct.css"
import { AnimationWrapper } from 'react-hover-animation'
import { useAlert } from "react-alert";
import FlipMove from 'react-flip-move';

function CheckoutProduct({image,title,price,rating,alternative,id}) {
    
    const [{basket},dispatch] = useStateValue();
    const alert = useAlert();

    const removeFromBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id
        })

        alert.error("An item was removed!");
    }
    return (
        <AnimationWrapper>
            <FlipMove duration={1750} enterAnimation="fade" leaveAnimation="fade">
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
            </FlipMove>
        </AnimationWrapper>
    )
}

export default CheckoutProduct;
