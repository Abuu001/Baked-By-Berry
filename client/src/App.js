import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import TopBar  from "./components/TopBar/TopBar";
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"
import Checkout from "./components/Checkout/Checkout" 
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login />
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
