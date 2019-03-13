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
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {BrowserRouter as Router, Link, Route,Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

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

class LobbyHistory extends React.Component {
    LobbyHistory= () =>{
       this.props.history.push('/history');
      };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper onClick={this.LobbyHistory} className={classes.padding}>
                    <Typography variant="h5" component="h3">
                        LOL match
                    </Typography>
                </Paper>
                <Paper onClick={this.LobbyHistory} className={classes.padding}>
                    <Typography variant="h5" component="h3">
                        FIFA Tournament
                    </Typography>
                </Paper>
                <Paper onClick={this.LobbyHistory} className={classes.padding}>
                    <Typography variant="h5" component="h3">
                        FIFA Mini-tournament
                    </Typography>
                </Paper>
                <Grid container justify="space-between" style={{ marginTop: '10px' }}>
                    <TextField label="Search Bet"/>
                    <Button variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Search</Button>
                </Grid>


            </div>
        );
    }
}

export default withRouter (withStyles(styles)(LobbyHistory));