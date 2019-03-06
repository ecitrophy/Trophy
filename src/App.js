import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginTab from "./components/Login.js";
import RegisterTab from "./components/Register.js";
import NavBar from "./components/NavBar";
import {Redeem }from "./components/Redeem";
import BetHistoryTab from "./components/betHistory";
import LobbyTab from "./components/Lobby";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';



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
    const InsideApp = () => (
      <div>
        <NavBar />
          <Route path="/redeem" component={RedeemView }/>
          <Route path="/history" component={HistoryView}/>

      </div>

    );
    return (
    <LobbyTab/>
//	<Router>
//  <div>
//  		<div>
//  		    <Switch>
//
//            <Route exact path="/register" component={RegisterView}/>
//            <Route exact path="/" component={LoginView}/>
//            <Route component={InsideApp}/>
//
//          </Switch>
//  		</div>
//
//    </div>
//	</Router>
    );
  }
}

export default App;
