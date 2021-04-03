import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router';
import { getBasketTotal } from '../../ContextAPI/reducer';
import { useStateValue } from '../../ContextAPI/StateProvider';
import "./Subtotal.css"

function Subtotal() {
    
    const history = useHistory();
    const [{basket},dispatch] = useStateValue();
    return (
         <div className="Subtotal">
            <CurrencyFormat
                renderText={value=>(
                    <>
                        <p>Subtotal ({basket?.length} items) :  <strong>{value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> {"  "} This order contains a gift
                     </small>   
                    </>
                )} 
                decimalScale={2} 
                value={getBasketTotal(basket)}
                displayType="text"
                thousandSeparator={true}
                prefix={"$"}  
            />
            <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
        </div>
   
    )
}

export default Subtotal
 