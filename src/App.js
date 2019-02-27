import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginTab from "./components/Login.js";

import NavBar from "./components/NavBar";
import {Redeem }from "./components/Redeem";
import BetHistoryTab from "./components/betHistory";

class App extends Component {
  render() {
    return (

        <div>
            <NavBar />
            <Login/>

        </div>
    );
  }
}

export default App;
