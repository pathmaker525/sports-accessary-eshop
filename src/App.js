import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ShopPage from './Components/Shop/Shop';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Components/Sign_In_Up/SignInAndSignUp';


function App() {
  return (
    <div>
      <Header />
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUp}/>
    </div>
  );
}

export default App;