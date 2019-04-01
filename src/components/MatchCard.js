import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

import {CardContent} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';


const styles = {
    card: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      minWidth: 275,
      marginBottom: 25,
      color: orange,
      

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
    
  };

  
function MatchCard (props){

    const { classes } = props;
    return(
    <div >
        <Card style= {styles.card} >
            <CardActionArea >
                <CardContent>
                    <Typography variant="h5">
                        {props.name}
                    </Typography>
                    <Typography color="textSecondary">
                        {Object.keys(props.bettors).length}/5 bettors
                    </Typography>
                    
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    );
    
}



export default withStyles(styles)(MatchCard);