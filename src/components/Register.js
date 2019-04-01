import React from 'react';
import { withStyles, Grid, TextField, Button} from '@material-ui/core';
import { Face, Lock, Email } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class RegisterTab extends React.Component {

    renderLogin= () =>{
               this.props.history.push('/');
              };
    render() {

        const { classes } = this.props;
        return (
            <div className={classes.margin}>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Face />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="username" label="Username" type="text" fullWidth autoFocus required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Email />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="email" label="Email" type="email" fullWidth required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Lock />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="password" label="Password" type="password" fullWidth required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Lock />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="confPass" label="Confirm Password" type="password" fullWidth required />
                    </Grid>
                </Grid>

                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Button onClick={this.renderLogin} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Sign In</Button>
                </Grid>
            </div>
        );
    }
}

export default withRouter (withStyles(styles)(RegisterTab));