import React from 'react';
import HomePage from './Components/HomePage/HomePage'
import './App.css'
import {Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
    </div>
  );
}

export default App;