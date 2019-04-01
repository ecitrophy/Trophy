import React from 'react';
import {Paper, withStyles, Grid, TextField, Button} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import { withRouter } from 'react-router-dom';
import MatchCard from './MatchCard';

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
    }
});

class LobbyTab extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            matchesList:[],
          };
        
    }

    componentDidMount() {
        fetch('https://gentle-wave-71675.herokuapp.com/matcheslist')
            .then(
                response => response.json()
                )
            .then(data => {
                
                let matchesList = [{"name":"ECI Lol","creator":"juan.gomez345","bettors":{"user1":15,"user2":0,"user5":15,"user3":15,"user4":15},"state":"WaitingForBets","winner":null,"id":1}];
                data.forEach(function (match) {
                    matchesList.push(match)
                    console.log(match);

                });
                this.setState({matchesList: matchesList});
            });
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
            <div>
                <div onClick={this.renderBet}>
                {this.state.matchesList.map((value,i)=>{
                    return(
                        <MatchCard key={i} 
                                    name={value.name} 
                                    state={value.state} 
                                    creator={value.creator}
                                    bettors={value.bettors} 
                                    > 
                        </MatchCard>
                    )
                })}
                </div>
                
                
                <Grid container justify="center" style={{ marginTop: '20px' }}>
                    <TextField label="Search Bet" fullWidth />
                    <Button variant="outlined"  style={{ marginTop: '40px' }} fullWidth color="primary" style={{ textTransform: "none"}}>Search</Button>
                </Grid>

                <Grid container justify="center" style={{ marginTop: '20px' }}>
                    <Button  onClick={this.renderNewBet} variant="outlined" fullWidth color="primary" style={{ textTransform: "none"}}>Create Bet</Button>
                </Grid>
            </div>
        );
    }
}

export default withRouter (withStyles(styles)(LobbyTab));