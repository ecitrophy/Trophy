import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginTab from "./components/Login.js";
import RegisterTab from "./components/Register.js";
import NavBar from "./components/NavBar";
import {Redeem }from "./components/Redeem";
import BetHistoryTab from "./components/betHistory";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


class App extends Component {

  render() {
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

    return (
	<Router>
  <div>
  		<div>
  		    <NavBar />


  		</div>
  		<div>
      <Route exact path="/" component={LoginView}/>
        <Route path="/redeem" component={RedeemView }/>
  			<Route path="/history" component={HistoryView}/>
  			<Route path="/register" component={RegisterView}/>
      </div>
    </div>
	</Router>
    );
  }
}

export default App;
