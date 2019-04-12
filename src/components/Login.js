import React from 'react';
import { withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Lock } from '@material-ui/icons';
import facebookLogo from "../img/facebookLogin.png";
import googleLogo from "../img/googleLogin.png";
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

class LoginTab extends React.Component {

  renderRegister= () =>{
   this.props.history.push('/register');
  };

  renderLobby= () =>{
      this.props.history.push('/lobby');
  };
  constructor(props) {
      super(props);
      this.state = {email: "", password: ""};
      localStorage.setItem("accessToken", "");
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
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
  handleSubmit() {


      axios.post("http://localhost:8080/user/login",
          {
              email: this.state.email,
              password: this.state.password
          }).then((response) => {
              localStorage.setItem("accessToken", response.data.accessToken);
              axios.get("http://localhost:8080/api/user/" + this.state.email,{
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("accessToken")

                  },
              }).then((response) =>{
                  let userInfo = response.data;
                  userInfo.password = "*******";
                  localStorage.setItem("user", JSON.stringify(userInfo));
                  console.log(response.data);
              })
              setTimeout(function (){}, 100);
              this.props.history.push('/lobby');
      }).catch(function (error) {
          console.log(error);
          alert(error);


      });
  }
  render() {
      const { classes } = this.props;
      return (
          <div className={classes.margin}>
              <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                      <Face />
                  </Grid>
                  <Grid item md={true} sm={true} xs={true}>
                      <TextField    variant="outlined" onChange={this.handleEmailChange} value={this.state.email} label="Email" type="email" fullWidth autoFocus required />
                  </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                      <Lock />
                  </Grid>
                  <Grid item md={true} sm={true} xs={true}>
                      <TextField   variant="outlined" onChange={this.handlePasswordChange} value={this.state.password}  label="Password" type="password" fullWidth required />
                  </Grid>
              </Grid>
              <Grid container alignItems="center" justify="space-between">
                  <Grid item>
                      <FormControlLabel control={
                          <Checkbox
                              color="primary"
                          />
                      } label="Remember me" />
                  </Grid>
                  <Grid item>
                      <Button  disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                  </Grid>
              </Grid>
              <Grid container justify="center" style={{ marginTop: '10px' }}>
                  <Button onClick={this.handleSubmit}  variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Login</Button>
              </Grid>
              <Grid container justify="center" style={{ marginTop: '10px' }}>
                  <img src={facebookLogo} alt="Facebook" height={58} width={200}/>
                  <img src={googleLogo} alt="Facebook" height={58} width={200}/>
              </Grid>
              <Grid container justify="center" style={{ marginTop: '10px' }}>
                  <Button onClick={this.renderRegister} variant="outlined" color="primary" style={{ textTransform: "none", maxWidth: '400px', minWidth: '400px'}}>Sign In</Button>
              </Grid>
          </div>
        );
    }
}

export default withRouter (withStyles(styles)(LoginTab));
