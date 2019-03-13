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

class StartBet extends React.Component {
    renderLobby= () =>{
                 this.props.history.push('/lobby');
                };
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <h3>LOL Match</h3>
                    </Grid>
                    <Paper className={classes.root} elevation={1}>
                        <Typography variant="h5" component="h3">
                            Creator:
                        </Typography>
                        <Grid container spacing={16}>
                            <Grid item md={true} sm={true} xs={true}>
                                <List className={classes.root}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Mood/>
                                            </Avatar>
                                            {/*<Avatar alt="Avatar" src={googleLogo} />*/}
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="juan.gomez345"
                                            secondary={
                                                <React.Fragment>
                                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                                        Top bettor
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <Typography variant="h5" component="h3">
                                    Bet: $5000
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>

                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mood/>
                                </Avatar>
                                {/*<Avatar alt="Avatar" src={googleLogo} />*/}
                            </ListItemAvatar>
                            <ListItemText
                                primary="sergiorLol123"
                                secondary="Begginer bettor"
                            />
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mood/>
                                </Avatar>
                                {/*<Avatar alt="Avatar" src={googleLogo} />*/}
                            </ListItemAvatar>
                            <ListItemText
                                primary="jigsawer35"
                                secondary="Average bettor"
                            />
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mood/>
                                </Avatar>
                                {/*<Avatar alt="Avatar" src={googleLogo} />*/}
                            </ListItemAvatar>
                            <ListItemText
                                primary="juan.gomez345"
                                secondary="Top bettor"
                            />
                            <ListItemSecondaryAction>

                                {/*<ListItemAvatar>*/}
                                {/*<Avatar alt="Avatar" src={googleLogo} />*/}
                                {/*</ListItemAvatar>*/}
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mood/>
                                </Avatar>
                                {/*<Avatar alt="Avatar" src={googleLogo} />*/}
                            </ListItemAvatar>
                            <ListItemText
                                primary="kasjdu"
                                secondary="Average bettor"
                            />
                        </ListItem>
                    </List>

                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button  onClick={this.renderLobby} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Start</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default  withRouter (withStyles(styles)(StartBet));