import React from 'react';
import { withStyles, Grid, TextField, Button} from '@material-ui/core';
import { Face, Lock, Email } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import axios from "axios";
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class RegisterTab extends React.Component {
  constructor(props) {
      super(props);
      this.state = {email: "", password: "",name: "",username: ""};
      localStorage.setItem("accessToken", "");
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }
  handleEmailChange(e) {
          this.setState({
              email: e.target.value
          });
      }
  handlePasswordChange(e) {
          this.setState({
              password: e.target.value
          });
      }
  handleNameChange(e) {
          this.setState({
              name: e.target.value
          });
      }
  handleUserNameChange(e) {
          this.setState({
              username: e.target.value
          });
      }
  handleSubmit() {


      axios.post("http://localhost:8080/user/register",
          {
              username: this.state.username,
              name: this.state.name,
              email: this.state.email,
              password: this.state.password


          }).then((response) => {
              alert("User created");
              this.props.history.push('/');
      }).catch(function (error) {
          console.log(error);
          alert(error);

      });
  }

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
                        <TextField onChange={this.handleUserNameChange} value={this.state.username} id="username" label="Username" type="text" fullWidth autoFocus required />
                    </Grid>
                </Grid>

                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Face />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField onChange={this.handleNameChange} value={this.state.name}  label="Name" type="text" fullWidth autoFocus required />
                    </Grid>
                </Grid>

                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Email />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField onChange={this.handleEmailChange} value={this.state.email} id="email" label="Email" type="email" fullWidth required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Lock />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField onChange={this.handlePasswordChange} value={this.state.password} id="password" label="Password" type="password" fullWidth required />
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
                    <Button onClick={this.handleSubmit} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Sign In</Button>
                </Grid>
            </div>
        );
    }
}

export default withRouter (withStyles(styles)(RegisterTab));
