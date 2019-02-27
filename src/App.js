import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginTab from "./components/Login.js";
import NavBar from "./components/NavBar"
import BetHistoryTab from "./components/betHistory";

class App extends Component {
  render() {
    return (

        <div>
            <NavBar />
            {/*<LoginTab/>*/}
            <BetHistoryTab/>
        </div>
    );
  }
}

export default App;
