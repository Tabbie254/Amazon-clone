   import React, {useEffect} from 'react';
import './App.css';
import Header from  './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Checkout from './Checkout'
import Payment from './Payment'
import Login from './Login'
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import { loadStripe } from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from "./Orders"


const promise = loadStripe(
  "pk_test_51IIrYIAFWwNTS2VvxUzoQt4ggXeUEkMvRz6An1m6buSdQr53eIUpLiWZdpiEb0V6X6WIVNzG9CZHu77BNN9Xs1Xc00sz7a277X"
);

function App() {
  const [{}, dispatch] = useStateValue();
  //only run once when app component loads
   useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>>', authUser);

        if (authUser){
          // the useros logged in / else the useer is logged in
          dispatch({
          // the user is lorgged out
            type: 'SET_USER',
             user: authUser
          })
        }else{

           dispatch({
            type: 'SET_USER',
            user: null
      })
     }
    })
   }, [])
  return (
    <Router>
     <div className="app">
     <Header/>
      <Switch>
      <Route path="/orders">
        <Orders />
      </Route> 
      <Route path="/login">
        <Login/>
      </Route> 
      <Route path="/Checkout">
        <Checkout/>
      </Route> 
      <Route path="/payment"> 
        <Elements stripe={promise}>
          <Payment />
        </Elements>
      </Route> 
      <Route path="/">
        <Home />
      </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
