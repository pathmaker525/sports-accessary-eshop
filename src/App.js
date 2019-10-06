import React from 'react';
import HomePage from './Components/HomePage/HomePage'
import ShopPage from './Components/Shop/Shop'
import './App.css'
import {Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;