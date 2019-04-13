import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import {withStyles, Button} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import juanNicolasImage from '../img/JuanNicolas.jpeg';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import statistic from "../img/graph.png";


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    margin: {
        margin: theme.spacing.unit * 2,
    },
});

class Profile extends React.Component {

    renderLogin= () =>{
        this.props.history.push('/');
    };

    render() {
        const { classes } = this.props;
        const user = JSON.parse(localStorage.getItem('user'));
        return (
            <div className={classes.margin}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={juanNicolasImage} className={classes.bigAvatar}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary= {user.userName}
                        secondary={
                            <React.Fragment>
                                <Typography component="span" className={classes.inline} color="textPrimary">
                                Top Bettor
                                </Typography>
                                {" — Ranking Position: 50"}
                                <br/>
                                <Typography component="span" className={classes.inline} color="textPrimary">
                                    Total Trophy Points: {user.trophyPoints}
                                </Typography>
                            </React.Fragment>

                        }
                    />
                </ListItem>
                <img src={statistic} alt="graph"/>
                <br/>
                <br/>
                <Button onClick={this.renderLogin} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Log out</Button>
            </div>
        );
    }


}

export default withRouter(withStyles(styles)(Profile));

