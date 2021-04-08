import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { useStateValue } from '../ContextAPI/StateProvider';
import "./Orders.css"

function Orders() {

    const [{basket,user},dispatch] = useStateValue();
    const [orders,setOrders]=useState([])

    useEffect(()=>{

        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .onSnapshot(snapshot=>{
            setOrders(snapshot.docs.map(doc=>({
                id:doc.id,
                 data : doc.data()
            })))
        })
    },[])
    return (
        <div  className="Orders">
            <h1>Your Orders</h1>

            <p>Site under maintenance <span>404</span></p>
        </div>
    )
}

export default Orders
