import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import About from './components/About';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Product from './components/Product';
import ProductData from './components/Form'

function App() {
   return (
      <Router>
         <div className="">
            <Header />
            <Switch>
               <Route path="/" exact component={Product} />
               <Route path="/carts" exact component={Cart} />
               <Route path="/home" exact component={Home} />
               <Route path="/about" exact component={About} />
               <Route path="/login" exact component={Login} />
               <Route path="/form" exact component={ProductData} />




            </Switch>
         </div>
      </Router>
   );
}

export default App;
