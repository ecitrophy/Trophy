import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginTab from "./components/Login.js";
import NavBar from "./components/NavBar"

class App extends Component {
  render() {
    return (
        <div>
            <NavBar />
            <LoginTab/>
        </div>
    );
  }
}

export default App;
