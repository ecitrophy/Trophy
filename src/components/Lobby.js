import React from 'react';
import { withStyles, Grid, TextField, Button} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import { withRouter } from 'react-router-dom';
import MatchCard from './MatchCard';

import SearchBar from 'material-ui-search-bar';

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import lolImg from "../img/lol.jpg";
import fifaTournamentImg from "../img/fifa-tournament.jpg";
import fifaMatchImg from "../img/fifa-match.jpg";

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
    card: {
        display: 'flex',
        maxWidth: 800,
        margin: '0 auto',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        paddingLeft: theme.spacing.unit * 25,
    },
    cover: {
        width: 200,
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
                
                <SearchBar
                    style={{
                        margin: '0 auto',
                        maxWidth: 800
                    }}
                />
                <br/>
                <br/>
                <Card onClick={this.renderBet} className={classes.card}>
                    <CardMedia
                        className={classes.cover}
                        image={lolImg}
                        title="LOL Image"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                LOL Tournament
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                No. Bettors: 50
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
                <br/>
                <Card onClick={this.renderBet} className={classes.card}>
                    <CardMedia
                        className={classes.cover}
                        image={fifaMatchImg}
                        title="FIFA Match Image"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                FIFA Match
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                No. Bettors: 5
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
                <br/>
                <Card onClick={this.renderBet} className={classes.card}>
                    <CardMedia
                        className={classes.cover}
                        image={fifaTournamentImg}
                        title="FIFA Tournamnet Image"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                FIFA Mini-tournament
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                No. Bettors: 15
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
                <br/>
                <div onClick={this.renderBet}>
                {this.state.matchesList.map((value,i)=>{
                    return(
                        <MatchCard className={classes.card} key={i} 
                                    name={value.name} 
                                    state={value.state} 
                                    creator={value.creator}
                                    bettors={value.bettors} 
                                    > 
                        </MatchCard>
                    )
                })}
                </div>
                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Button  onClick={this.renderNewBet} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Create New Bet</Button>
                </Grid>
            </div>
        );
    }
}

export default withRouter (withStyles(styles)(LobbyTab));