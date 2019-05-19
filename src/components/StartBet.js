import React from 'react';
import {Paper, withStyles, Grid, Button, Divider,TextField} from '@material-ui/core';
import { Mood } from '@material-ui/icons';
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { withRouter } from 'react-router-dom';
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
    }
});


class StartBet extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            match:{creator:{name:''},bettors:[]},
            user: JSON.parse(localStorage.getItem('user')),
          };

    }
    componentDidMount(){
        this.getMatch();
    }
    getMatch= () =>{
      AxiosInstance.getInstance().get('/apimatch/match/' + this.props.match.params.id)
          .then(response => {
            // alert(response);
              this.setState({match: response.data})
          }).catch(function(response){
              alert('Ha ocurrido un error: Apuesta no existe'+response);

            });
                };
    renderLobby= () =>{
                 this.props.history.push('/lobby');
                };
    joinRoom= () =>{
        AxiosInstance.getInstance().put("/apimatch/adduser/"+ this.props.match.params.id , this.state.user)
        .then(response => {
            this.getMatch();
        }).catch(function (error) {
            console.log(error);
            alert(error);
        });
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
                                <ListItem  keky='creator' alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Mood/>
                                        </Avatar>
                                        {/*<Avatar alt="Avatar" src={googleLogo} />*/}
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary= {this.state.match.creator.name}
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
                                Base Bet: {this.state.match.minimumBet}
                            </Typography>
                            <Typography variant="h5" component="h3">
                                Total Bet: {this.state.match.minimumBet*(1+this.state.match.bettors.length)}
                            </Typography>

                            <Typography variant="h5" component="h3">
                                Juego: {this.state.match.game}
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
                                    primary= {bettor.userName}
                                    secondary="Begginer bettor"
                                />
                                <div> Bet: {this.state.match.minimumBet}</div>
                            </ListItem>

                            <Divider/>
                            </>
                        )
                    })}

                </List>
                {this.state.match.creator.name != this.state.user.userName ?
                    <>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        LAS APUESTAS ESTAN ABIERTAS!

                    </Grid>

                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button  onClick={this.joinRoom} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>APOSTAR!</Button>
                    </Grid>
                    </> :
                    <>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button  onClick={this.renderLobby} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>EMPEZAR!</Button>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button  onClick={this.renderLobby} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Borrar apuesta</Button>
                    </Grid>
                    </>
                }
                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Button  onClick={this.renderLobby} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Salir</Button>
                </Grid>
            </div>
        );
    }
}

export default  withRouter (withStyles(styles)(StartBet));
