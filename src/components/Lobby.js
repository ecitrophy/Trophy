import React from 'react';
import { withStyles, Button} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import MatchCard from './MatchCard';

import SearchBar from 'material-ui-search-bar';
import {AxiosInstance} from "../AxiosInstance";


const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

class LobbyTab extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            matchesList:[],
          };

    }

    componentDidMount() {
        if(localStorage.getItem('accessToken')!==null&&localStorage.getItem('accessToken')!==""){
          AxiosInstance.getInstance().get("/apimatch/matcheslist")
              .then(response => {

                  //let matchesList = [{"name":"ECI Lol","creator":"juan.gomez345","bettors":{"user1":15,"user2":0,"user5":15,"user3":15,"user4":15},"state":"WaitingForBets","winner":null,"id":1}];
                  let matchesList = [];
                  response.data.forEach(function (match) {
                      matchesList.push(match)
                      console.log(match);

                  });
                  this.setState({matchesList: matchesList});
              });
        }

    }
    renderBet= () =>{
       this.props.history.push('/startbet');
      };

    renderNewBet= () =>{
    this.props.history.push('/newbet');
    };

    render() {
        const { classes } = this.props;
        return (

            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center'}}>
            {localStorage.getItem('accessToken')!==null&&localStorage.getItem('accessToken')!==""?<div>



                {this.state.matchesList.map((value,i)=>{
                    return(
                        <MatchCard className={classes.card} key={i}
                                    name={value.name}
                                    state={value.state}
                                    creator={value.creator}
                                    bettors={value.bettors}
                                    id={value.id}
                                    game={value.game}
                                    match={value}
                                    >
                        </MatchCard>
                    )
                })}
                <div  container justify="center" >
                  <Button  onClick={this.renderNewBet} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Create New Bet</Button>
                </div >
                </div>
                :<div></div>}
            </div>
        );
    }
}

export default withRouter (withStyles(styles)(LobbyTab));
