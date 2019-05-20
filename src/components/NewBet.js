import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link}  from "react-router-dom";
import {AxiosInstance} from "../AxiosInstance";

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
    value: 'League Of Legends',
    label: 'League Of Legends',
  },
  {
    value: 'Clash Royale',
    label: 'Clash Royale',
  },
  {
    value: 'FIFA',
    label: 'FIFA',
  },
  {
    value: 'Hearthstone',
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
    currency: 'none',
    summoner:'',
    minimum:'',
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
    this.state.user.bets={default:{player:this.state.summoner,bet:this.state.minimum}};
      var json = {"name":this.state.name,"creator": this.state.user,"bettors":[],"state":"OPEN","winner":null, "minimumBet":Number(this.state.minimum), "game": "LEAGUEOFLEGENDS"};
          // alert(JSON.stringify(json));

        AxiosInstance.getInstance().post('/apimatch',JSON.stringify(json))
        .then(response => {
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
      <div>
        <TextField
          id="standard-name"
          label="Name of room"
          fullWidth
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="summoner"
          label="Your summoner election"
          fullWidth
          className={classes.textField}
          value={this.state.summoner}
          onChange={this.handleChange('summoner')}
          margin="normal"
        />
        <TextField
          id="summoner"
          label="Minimum Bet"
          fullWidth
          className={classes.textField}
          value={this.state.minimum}
          onChange={this.handleChange('minimum')}
          margin="normal"
          type="number"
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

      </div>
    );
  }
}

NewBet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewBet);
