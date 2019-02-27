import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginTab from "./components/Login.js";
import RegisterTab from "./components/RegisterTab.js";
import NavBar from "./components/NavBar";
import {Redeem }from "./components/Redeem";
import BetHistoryTab from "./components/betHistory";
import {BrowserRouter as Router, Link, Route,  Redirect } from 'react-router-dom';

const LoginView = () => (
 <LoginTab/>
);

const RedeemView = () => (
 <Redeem/>
);
const HistoryView = () => (
 <BetHistoryTab/>
);

const RegisterView = () => (
    <RegisterTab/>
   
);
class App extends Component {
  render() {
	var rendervista=<Redirect to="/"/>;
    return (
	<Router>
		<div>
		    <NavBar />
		    {rendervista}

		</div>
		<div>
                    <Route exact path="/" component={LoginView}/>
                    <Route path="/redeem" component={RedeemView }/>
			<Route path="/history" component={HistoryView}/>
			<Route path="/register" component={RegisterView}/>
                </div>
	</Router>
    );
  }
}

export default App;
