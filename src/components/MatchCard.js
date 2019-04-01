import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

import {CardContent} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';
import CardMedia from "@material-ui/core/CardMedia";
import lolImg from "../img/lol.jpg";


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
        paddingLeft: theme.spacing.unit * 25,
    },
    cover: {
        width: 200,
    }
    
  });

  
function MatchCard (props){

    const { classes } = props;
    return(
    <div >
        <br/>
        <Card  className={classes.card}>
            <CardMedia
                className={classes.cover}
                image={lolImg}
                title="LOL Image"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        No. Bettors: {Object.keys(props.bettors).length}/50
                    </Typography>
                </CardContent>
            </div>
        </Card>
        
    </div>
    );
    
}



export default withStyles(styles)(MatchCard);