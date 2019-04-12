import React from 'react';
import {Paper, withStyles, Grid, Button, Divider} from '@material-ui/core';
import { Mood } from '@material-ui/icons';
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
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
    constructor(props){
        super(props);
        this.state ={
            match:{'bettors':[]},
          };

    }
    componentDidMount(){
        fetch('http://localhost:8080/matcheslist/' + this.props.match.params.id )
            .then(
                response => response.json()
                )
            .then(data => {
            
                this.setState({match: data})
                console.log(this.state.match.bettors);
            });
    }
    renderLobby= () =>{
                 this.props.history.push('/lobby');
                };
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.margin}>
                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <h1>{this.state.match.name}</h1>
                </Grid>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                        Creator: 
                    </Typography>
                    <Grid container spacing={16}>
                        <Grid item md={true} sm={true} xs={true}>
                            <List className={classes.root}>
                                <ListItem  alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Mood/>
                                        </Avatar>
                                        {/*<Avatar alt="Avatar" src={googleLogo} />*/}
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary= {this.state.match.creator}
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
                                Bet: {this.state.match.currentBet}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <h3>Bettors</h3>
                <List>
                    {this.state.match.bettors.map((bettor,i)=>{
                        return(
                            <>
                            <ListItem key={i}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Mood/>
                                    </Avatar>
                                    {/*<Avatar alt="Avatar" src={googleLogo} />*/}
                                </ListItemAvatar>
                                <ListItemText
                                    primary= {bettor.username}
                                    secondary="Begginer bettor"
                                />
                                <div> Bet: {bettor.bet}</div>
                            </ListItem>

                            <Divider/>
                            </>
                        )
                    })}
                    
                </List>

                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Button  onClick={this.renderLobby} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Start</Button>
                </Grid>
            </div>
        );
    }
}

export default  withRouter (withStyles(styles)(StartBet));