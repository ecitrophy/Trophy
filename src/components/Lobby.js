import React from 'react';
import {withStyles, Grid, Button} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import Card from "@material-ui/core/Card";
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
    renderBet= () =>{
       this.props.history.push('/startbet');
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
                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Button  variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Create New Bet</Button>
                </Grid>
            </div>
        );
    }
}

export default withRouter (withStyles(styles)(LobbyTab));