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
