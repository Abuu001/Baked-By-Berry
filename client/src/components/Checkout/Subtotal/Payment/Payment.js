import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../../ContextAPI/StateProvider';
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';
import "./Payment.css"
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../../ContextAPI/reducer';
import axios from 'axios';
import { useHistory } from 'react-router';
import { db } from '../../../../firebase';
 
function Payment() {

    let history= useHistory()
    const stripe =useStripe();
    const elements=useElements();
    const [{basket,user},dispatch] = useStateValue();
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true)
    const [suceeded,setSuceeded]=useState(false);
    const [processing,setProcessing]=useState("");
    const [clientSecret,setClientSecret]=useState(true);

    useEffect(() => {
        //generate special stripe secret which allows us to cahrge
         
        const getClientSecret =async()=>{
            const response = await axios({
                method : 'post',
                //stripe expects the total in a currency subunits 
                url : `/payments/create?total=${getBasketTotal(basket) * 100}`
            })

            setClientSecret(response.data.clientSecret)
        }
    }, [basket])

    const handleSubmit=async(event)=>{
        event.preventDefault();
        history.push('/orders')

        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //paymentIntent is the payment confirmation
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket : basket,
                    amount : paymentIntent.amount,
                    created : paymentIntent.created
                })

            setSuceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type : "EMPTY_BASKET"
            })

        })
      
    }

    const handleChange=(event)=>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className="Payment">
             <div className="payment__container">
                 <h1>
                     Checkout ( {basket?.length || 0}  items )</h1>
                 <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                            <div className="payment__address">
                                <p>User  :  {user?.email || 'Guest'}</p>
                                <p>Street : Kimathi Street</p>
                                <p>Location : Nairobi,CBD</p>
                            </div>
                 </div>

                 <div className="payment__section">
                 <div className="payment__title">
                     <h3>Review items and delivery <svg enable-background="new 0 0 24 24" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg" id="fi_3178933"><path d="m6.5 19h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"></path><path d="m22.75 19h-1.25c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.835l.674-3.592c-.009-1.838-1.579-3.408-3.509-3.408h-3.283l-1.591 7h2.874c.276 0 .5.224.5.5s-.224.5-.5.5h-3.5c-.152 0-.296-.069-.391-.188-.095-.118-.131-.274-.097-.422l1.818-8c.052-.229.254-.39.488-.39h3.682c2.481 0 4.5 2.019 4.5 4.5l-.759 4.092c-.044.237-.25.408-.491.408z"></path><path d="m19.5 21c-1.378 0-2.5-1.121-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path><path d="m8.5 21c-1.378 0-2.5-1.121-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path><path d="m6.5 10h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h4c.276 0 .5.224.5.5s-.224.5-.5.5z"></path><path d="m6.5 13h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5s-.224.5-.5.5z"></path><path d="m6.5 16h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z"></path><path d="m14 19h-3.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.101l2.272-10h-11.373c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h12c.152 0 .296.069.391.188.095.118.131.274.097.422l-2.5 11c-.052.229-.255.39-.488.39z"></path></svg>  </h3>
                 </div>
                 <div className="payment__items">
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

                <div className="payment__section">
                    <div className="payment__title">

                    </div>
                    <h3>Payment Method</h3>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__price__container">
                                <CurrencyFormat
                                        renderText={value=>(
                                                <h3>Order Total :  {value} </h3>
                                        )} 
                                        decimalScale={2} 
                                        value={getBasketTotal(basket)}
                                        displayType="text"
                                        thousandSeparator={true}
                                        prefix={"$"}  
                                     />
                                     <button disabled={processing || disabled || suceeded}> <span>{processing ? <p>Processing</p> : "Buy now" }</span></button>
                            </div>

                            {error && <div>{error}</div> }
                        </form>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Payment
