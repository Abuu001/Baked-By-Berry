import React from 'react'
import { useStateValue } from '../ContextAPI/StateProvider';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import Subtotal from "./Subtotal/Subtotal";

function Checkout() {

    const [{basket},dispatch] = useStateValue();
    return (
        <div className="Checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="banner ads" className="checkout__ad"/>
                <div >
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                     {basket.map(item=>(
                         <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            alternative={item.alternative}
                            rating={item.rating}
                         />
                     ))}
               </div>
            </div>

            <div className="checkout__right">
               <Subtotal />
            </div>
        </div>
    )
}

export default Checkout