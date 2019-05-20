import React from 'react';
import Card from '@material-ui/core/Card';

import {CardContent} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import CardMedia from "@material-ui/core/CardMedia";
import lolImg from "../img/lol.jpg";
import fifaImg from "../img/fifa-match.jpg";
import clashImg from "../img/clash.jpg";
import hsImg from "../img/hearthstone.jpg";


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
        minWidth: 340,
        margin: 20,
        cursor: 'pointer',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    content: {
        //paddingLeft: theme.spacing.unit * 25,
    },
    cover: {
        width: 150,
    }

  });


class MatchCard extends React.Component {


    renderBet= () =>{
        this.props.history.push('/startbet/' + this.props.id);
    };
    render() {
        const { classes } = this.props;
        var img;
        if(this.props.game === "LEAGUEOFLEGENDS"){
            img = lolImg;
        }else if(this.props.game === 'FIFA'){
            img = fifaImg;
        }else if(this.props.game === 'Hearthstone'){
            img = hsImg;
        }else if(this.props.game === 'Clash Royale'){
            img = clashImg;
        }
        return(
        <div onClick={this.renderBet}>
            <Card  className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={img}
                    title="Image"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {this.props.name}
                        </Typography>
                        <Typography component="h6" variant="h6" >
                            Game: {this.props.game}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            No. Bettors: {Object.keys(this.props.bettors).length+1}
                        </Typography>
                    </CardContent>
                </div>
            </Card>

        </div>
        );
    };

}



export default withRouter(withStyles(styles)(MatchCard));
