import React from 'react';
import {withStyles, CardMedia, CardContent} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import Card from "@material-ui/core/Card";
import lolImage from '../img/lol.jpg';
import fifaTournament from '../img/fifa-tournament.jpg';
import fifaMatch from '../img/fifa-match.jpg';

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
    cover: {
        width: 200,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        paddingLeft: theme.spacing.unit * 25,
    }
});

class LobbyHistory extends React.Component {
    LobbyHistory= () =>{
       this.props.history.push('/history');
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
                <Card onClick={this.LobbyHistory} className={classes.card}>
                    <CardMedia
                        className={classes.cover}
                        image={lolImage}
                        title="LOL Image"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                LOL Tournament
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Winner: juan.gomez345
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
                <br/>
                <Card onClick={this.LobbyHistory} className={classes.card}>
                    <CardMedia
                        className={classes.cover}
                        image={fifaMatch}
                        title="FIFA Match Image"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                FIFA Match
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Winner: juan.gomez345
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
                <br/>
                <Card onClick={this.LobbyHistory} className={classes.card}>
                    <CardMedia
                        className={classes.cover}
                        image={fifaTournament}
                        title="FIFA Mini-tournament Image"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                FIFA Mini-tournament
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Winner: juan.gomez345
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withRouter (withStyles(styles)(LobbyHistory));