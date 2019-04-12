import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link}  from "react-router-dom";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'lol',
    label: 'League Of Legends',
  },
  {
    value: 'fifa',
    label: 'FIFA',
  },
  {
    value: 'hearthstone',
    label: 'Hearthstone',
  },
];

class NewBet extends React.Component {
  constructor(props){
          super(props);

          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleInputChange = this.handleInputChange.bind(this);
      }

  state = {
    id: 1,
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: '',
    file: null,
    user: JSON.parse(localStorage.getItem('user'))
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleInputChange(e) {
    this.setState({
        file: e.target.files[0]
    });
  };
  renderLobby= () =>{
     this.props.history.push('/lobby');
    };
  handleSubmit(e){
      var json = {"name":this.state.name,"creator": this.state.user.userName,"bettors":[{"username":"test-frontend1", "bet":"10"}, {"username":"test-frontend2", "bet":"15"}],"state":"WaitingForBets","winner":null,"id":this.state.id, "currentBet":0};
        console.log(JSON.stringify(json));
      fetch('http://localhost:8080/matcheslist', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(json)
        })
  .then((responseJson) => {
    this.setState({id: this.state.id + 1});
    alert("se creó la partida");
    //this.props.history.push('/lobby');
  }).catch(function(){
    
  })

        /*let data = new FormData();
        data.append('file', this.state.file);*/

        /*this.axios.post('http://localhost:8080/matcheslist', json)
            .then(function (response) {
                console.log("Match successfully added!");
        })
        .catch(function (error) {
            console.log("failed post");
        });*/
      /*e.preventDefault();
      var parse = JSON.parse(localStorage.tasks);
      parse.push(this.state);
      localStorage.tasks = JSON.stringify(parse);
      window.alert("Task Added succesfully");*/
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.container} justify="center">
        <TextField
          id="standard-name"
          label="Name"
          fullWidth
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          fullWidth
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select the game"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="standard-full-width"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Please enter a description"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />




        <Button type="submit"
        fullWidth
        color="primary"
        className="submit" onClick={this.handleSubmit}> Submit</Button>

        <Link to="/lobby">
            <Button
                    
                    color="primary"
                    className="submit" > Back
            </Button>
        </Link>

      </Paper>
    );
  }
}

NewBet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewBet);
