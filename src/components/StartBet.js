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
// import {StompConnector} from "../StompConnector";
import SockJsClient from 'react-stomp';

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
            match:{creator:{name:'',bets:{[props.match.params.id]:{player:''}}},bettors:[]},
            user: JSON.parse(localStorage.getItem('user')),
            summoner:''
          };
        this.clientRef=null;
        this.handleSummonerChange = this.handleSummonerChange.bind(this);

    }
    componentDidMount(){
        this.getMatch();
    }
    handleSummonerChange(e) {
            this.setState({
                summoner: e.target.value
            });
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
    manageStomp= (eventx) =>{
                  if(eventx.name!=null){
                      this.getMatch();
                  }
                  else if(eventx==true){
                    this.props.history.push('/lobby');

                  }
                  else if(eventx.status!=null){
                      var bool=false;
                      for(var winner in eventx.winners){
                          if(winner.id==this.state.user.id){
                             bool=true;
                             break;
                          }
                      }
                      if(bool){
                          alert("felicitaciones, ganaste la apuesta");
                      }
                      else{
                          alert("Perdiste la apuesta");
                      }


                  }

                };
    joinRoom= () =>{
      if(this.state.summoner!=''){
        this.state.user.bets={default:{player:this.state.summoner,bet:this.state.match.minimumBet}};
          AxiosInstance.getInstance().put("/apimatch/adduser/"+ this.props.match.params.id , this.state.user)
          .then(response => {
              this.sendMessageJoin();
          }).catch(function (error) {
              console.log(error);
              alert(error);
          });
      }

    };

    sendMessageJoin= () =>{
      // var socket = new SockJS('https://gentle-wave-71675.herokuapp.com/stompendpoint');
      // this.clientRef.sendMessage('/app/newplayer.'+roomid, userid);
      // this.clientRef.sendMessage("app/newplayer."+this.props.match.params.id, this.state.user.email);
      this.clientRef.sendMessage("/app/newplayer."+this.props.match.params.id, this.state.user.email);
      // this.clientRef.sendMessage('https://gentle-wave-71675.herokuapp.com/app/newplayer.'+roomid, userid);
    };
    sendMessageStart= () =>{
      this.clientRef.sendMessage("/app/startroom."+this.props.match.params.id);
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.margin}>
            <div>
              <SockJsClient url='https://gentle-wave-71675.herokuapp.com/handler' topics={["/topic/room."+this.state.match.id,"/topic/startroom."+this.state.match.id]}
                  onMessage={(msg) => {this.manageStomp(msg) ;}}
                  ref={ (client) => { this.clientRef = client }}
                  onConnect={ () => { console.log("connected") ;} }
                  />

            </div>
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
                                            <img style={{ width: '100%',height: '100%' }} src={require('../img/avatars/main.JPG')} />
                                        </Avatar>
                                        {/*<Avatar alt="Avatar" src={googleLogo} />*/}
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary= {this.state.match.creator.userName}
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
                            <Typography variant="h5" component="h3">

                                Apostó por: {this.state.match.creator.bets[this.props.match.params.id]['player']}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <h3>Bettors</h3>
                <List>
                    {this.state.match.bettors.map((bettor,i)=>{
                        return(
                            <>
                            <ListItem key={i} >

                                <ListItemAvatar>
                                    <Avatar>
                                      <img  style={{ width: '100%',height: '100%' }} src={require('../img/avatars/'+i%10+'.JPG')} />

                                    </Avatar>
                                    {/*<Avatar alt="Avatar" src={googleLogo} />*/}
                                </ListItemAvatar>
                                <ListItemText
                                    primary= {bettor.userName}
                                    secondary="Begginer bettor"
                                />
                                <div> {"Apostó por "+ bettor.bets[this.props.match.params.id]['player']+": "+this.state.match.minimumBet+" TP"}</div>
                            </ListItem>

                            <Divider/>
                            </>
                        )
                    })}

                </List>
                {this.state.match.creator.id != this.state.user.id ?
                    <>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        LAS APUESTAS ESTAN ABIERTAS!

                    </Grid>

                    <TextField
                      id="summoner"
                      label="Your summoner election"
                      fullWidth
                      className={classes.textField}
                      value={this.state.summoner}
                      variant="outlined"
                      onChange={this.handleSummonerChange}
                      margin="normal"
                    />

                    <Grid container justify="center" style={{ marginTop: '10px' }}>

                        <Button  onClick={this.joinRoom} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>APOSTAR!</Button>
                    </Grid>
                    </> :
                    <>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button  onClick={this.sendMessageStart} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>EMPEZAR!</Button>
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
