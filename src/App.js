import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginTab from "./components/Login.js";
import RegisterTab from "./components/Register.js";
import NavBar from "./components/NavBar";
import {Redeem }from "./components/Redeem";
import BetHistoryTab from "./components/betHistory";
import BetLobbyTab from "./components/betLobby";
import {BrowserRouter as Router, Link, Route,  Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<div>
			<BetLobbyTab/>
		</div>
    );
  }
}

export default App;
