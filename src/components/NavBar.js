import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AccountCircle from '@material-ui/icons/AccountCircle';

import TrophyLogo from '../img/TrophyLogo1.png';
import { Assignment, Alarm, AssignmentReturn, ExpandLess, ExpandMore, StarBorder, AddShoppingCart, AccountBalanceWallet } from '@material-ui/icons';
import { Collapse } from '@material-ui/core';

import { withRouter } from 'react-router-dom';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});


class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
    nestedOpen: false
  };


  handleClick = () => {
    this.setState(state => ({ nestedOpen: !state.nestedOpen }));
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  renderRedeem= () =>{
   this.props.history.push('/redeem');
  };
  renderHistory= () =>{
   this.props.history.push('/lobbyhistory');
  };
  renderLogin= () =>{
   this.props.history.push('/');
  };
  renderLobby= () =>{
    this.props.history.push('/lobby');
  };
  renderStartBet= () =>{
    this.props.history.push('/startbet');
  };
  renderProfile = () => {
    this.props.history.push('/profile')
  };
  renderExchange = () => {
    this.props.history.push('/exchange')
  };


  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    const user = JSON.parse(localStorage.getItem('user'));

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{ backgroundColor: '#051f3f' }}
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
                <img src={TrophyLogo} alt="Trophy Logo" height={40}/>

            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Trophy
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>

              <div>
              <ListItem onClick={this.renderProfile} button  >

                <ListItemIcon>{<AccountCircle />}</ListItemIcon>
                <ListItemText primary= {user.userName} />
              </ListItem>
              </div>
          </List>
          <List>
              <ListItem onClick={this.renderLobby} button>
                <ListItemIcon>{<Assignment /> }</ListItemIcon>
                <ListItemText primary='Lobby'/>
              </ListItem>
          </List>
          <List>
              <ListItem  onClick={this.renderHistory}  button >
                <ListItemIcon>{<Alarm /> }</ListItemIcon>
                <ListItemText primary='Historial' />
              </ListItem>
          </List>
          <List>
                <>
              <ListItem  button onClick={this.handleClick}>
                <ListItemIcon>{<AccountBalanceWallet />}</ListItemIcon>
                <ListItemText primary='Monedero' />
                {this.state.nestedOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.nestedOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                  <ListItem onClick={this.renderRedeem}  button className={classes.nested}>
                  <ListItemIcon>
                      <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Canjear" />
                  </ListItem>
                  <ListItem onClick={this.renderExchange} button className={classes.nested}>
                  <ListItemIcon>
                      <AddShoppingCart />
                  </ListItemIcon>
                  <ListItemText inset primary="Comprar" />
                  </ListItem>
              </List>
              </Collapse>
              </>
          </List>
          <Divider />
          <List>

              <ListItem button onClick={this.renderLogin}  >
                <ListItemIcon>{<AssignmentReturn />}</ListItemIcon>
                <ListItemText inset primary='Cerrar Sesion' />

              </ListItem>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter (withStyles(styles, { withTheme: true })(PersistentDrawerLeft));
