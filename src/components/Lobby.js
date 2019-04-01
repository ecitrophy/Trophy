import React from 'react';
import {Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Divider} from '@material-ui/core';
import { Mood } from '@material-ui/icons';
import trophyLogo from "../img/TrophyLogo1.png";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {BrowserRouter as Router, Link, Route,Redirect} from 'react-router-dom';
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

    render() {
        const { classes } = this.props;
        return (
            <div>
                {this.state.matchesList.map((value,i)=>{
                    return(
                        <MatchCard key={i} 
                                    name={value.name} 
                                    state={value.state} 
                                    creator={value.creator}
                                    bettors={value.bettors}> 
                        </MatchCard>
                    )
                })}
                <Card onClick={this.renderBet} className={classes.padding}>
                    <Typography variant="h5" component="h3">
                        this.state.matchesList.name
                    </Typography>
                </Card>
                <Paper onClick={this.renderBet} className={classes.padding}>
                    <Typography variant="h5" component="h3">
                        FIFA Tournament
                    </Typography>
                </Paper>
                <Paper onClick={this.renderBet} className={classes.padding}>
                    <Typography variant="h5" component="h3">
                        FIFA Mini-tournament
                    </Typography>
                </Paper>
                <Grid container justify="space-between" style={{ marginTop: '10px' }}>
                    <TextField label="Search Bet"/>
                    <Button variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Search</Button>
                </Grid>

                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Button  variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Create Bet</Button>
                </Grid>
            </div>
        );
    }
}

export default withRouter (withStyles(styles)(LobbyTab));