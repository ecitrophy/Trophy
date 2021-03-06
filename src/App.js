import React, { Component } from 'react';
import './App.css';
import LoginTab from "./components/Login.js";
import RegisterTab from "./components/Register.js";
import NavBar from "./components/NavBar";
import {Redeem }from "./components/Redeem";
import BetHistoryTab from "./components/betHistory";
import LobbyTab from "./components/Lobby";
import StartBet from "./components/StartBet";
import NewBet from "./components/NewBet";
import LobbyHistory from "./components/LobbyHistory";
import Profile from "./components/Profile";
import {Exchange} from "./components/Exchange";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



class App extends Component {

  //   updateToken() {
  //    this.setState({token: localStorage.getItem('accessToken')});
  //    history.push('/lobby');
  // };
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         token: localStorage.getItem('accessToken')
  //     };
  //     this.updateToken = this.updateToken.bind(this);
  // }

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
      <div>
        <NavBar />
        <LobbyTab/>
      </div>
    );

    const StartBetView = () => (
        <StartBet/>
    );

    const CreateNewBetView = () => (
        <NewBet/>
    );

    const ProfileView = () => (
        <Profile/>
    );

    const ExchangeView = () => (
        <Exchange/>
    );


    const InsideApp = () => (
      <div>
        <NavBar />
          <Route path="/redeem" component={RedeemView }/>
          <Route path="/history" component={HistoryView}/>
          <Route path="/startbet/:id" component={StartBetView}/>
          <Route path="/newbet" component={CreateNewBetView}/>
          <Route path="/lobbyhistory" component={LobbyHistoryView}/>
          <Route path="/profile" component={ProfileView}/>
          <Route path="/exchange" component={ExchangeView}/>
      </div>

    );
    return (

	<Router>
    <div>
 		<div>
  		    <Switch>
            <Route path="/lobby" component={LobbyView}/>
            <Route exact path="/register" component={RegisterView}/>
            <Route exact path="/" component={LoginView}/>
            {localStorage.getItem('accessToken')!==null&&localStorage.getItem('accessToken')!==""?  <Route component={InsideApp}/>:<div></div>}


          </Switch>
  		</div>

    </div>
	</Router>
    );
  }
}

export default App;
