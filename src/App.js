import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginTab from "./components/Login.js";
import RegisterTab from "./components/Register.js";
import NavBar from "./components/NavBar";
import {Redeem }from "./components/Redeem";
import BetHistoryTab from "./components/betHistory";
import LobbyTab from "./components/Lobby";
import StartBet from "./components/StartBet";
import LobbyHistory from "./components/LobbyHistory";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';



class App extends Component {

  render() {
    const LoginView = () => (
     <LoginTab/>
    );
    const LobbyHistoryView = () => (
         <LobbyHistory/>
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
    const LobbyView = () => (
            <LobbyTab/>

        );
     const StartBetView = () => (
            <StartBet/>

            );

    const InsideApp = () => (
      <div>
        <NavBar />
          <Route path="/redeem" component={RedeemView }/>
          <Route path="/history" component={HistoryView}/>
          <Route path="/lobby" component={LobbyView}/>
          <Route path="/startbet" component={StartBetView}/>
          <Route path="/lobbyhistory" component={LobbyHistoryView}/>
      </div>

    );
    return (

	<Router>
    <div>
 		<div>
  		    <Switch>

            <Route exact path="/register" component={RegisterView}/>
            <Route exact path="/" component={LoginView}/>
            <Route component={InsideApp}/>

          </Switch>
  		</div>

    </div>
	</Router>
    );
  }
}

export default App;
