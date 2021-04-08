import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import TopBar  from "./components/TopBar/TopBar";
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"
import Checkout from "./components/Checkout/Checkout" 
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/ContextAPI/StateProvider';
import Payment from './components/Checkout/Subtotal/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements } from '@stripe/react-stripe-js';
import Orders from "./components/Orders/Orders"

const promise=loadStripe('pk_test_51IdhMjFe3O7A748KwjPW5NazYWNYVbsAORHLVuGtwAL6cea5FCk1lYsh2hbIG4tu7szGz1H7El3wpvxSbDA0s8uS00BB5Y8gKT');

function App() {

  const [{},dispatch] =useStateValue();
  
  useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        console.log(authUser);

        if(auth) {
          //the user just logged in / was logged in
          dispatch({
            type : 'SET_USER',
            user : authUser
          })
        }else{
          //the user is logged out
          dispatch({
            type : 'SET_USER',
            user : null
          })
        }
      })

  },[])
  
  return (
    <Router>
      <div className="App">

        <Switch>
        <Route path="/orders">
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/checkout">
            <TopBar /> 
             <Checkout />
          </Route>

          <Route path="/payment">
            <TopBar /> 
            <Elements stripe={promise}>
             <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <TopBar /> 
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
