import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './Nav.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

function ButtonAppBar(props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const { isAuthenticated, login, logout, userHasScopes } = props;
    
    return (
      <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar style={{ background: '#2E3B55' }}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
              <MenuIcon aria-controls="simple-menu" aria-haspopup="true" />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                React Auth0 application
            </Typography>
            <Button color="secondary" variant="contained" onClick={isAuthenticated() ? logout : login}>{isAuthenticated() ? 'Log Out' : 'Log In'}</Button>
          </Toolbar>
        </AppBar>
      </div>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/profile">Profile</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/public">Public</Link></MenuItem>
          {isAuthenticated() && (
            <MenuItem onClick={handleClose}><Link to="/private">Private</Link></MenuItem>
          )}
          {isAuthenticated() && userHasScopes(['read:courses']) && (
            <MenuItem onClick={handleClose}><Link to="/course">Courses</Link></MenuItem>
          )}
          <MenuItem onClick={handleClose}><Link to="/about">About</Link></MenuItem>
        </Menu>
      </React.Fragment>
    );
  }



class Nav extends Component {

    getActiveUrl(urlPath){
        return this.props.location.history.location.pathname === urlPath ? "is-active" : '';
    }
    
    render() {
        const { isAuthenticated, login, logout, userHasScopes } = this.props.auth;

        return (
          <nav>
            <React.Fragment>
              <ButtonAppBar isAuthenticated={isAuthenticated} login={login} logout={logout} userHasScopes={userHasScopes} />
            </React.Fragment>
          </nav>
        );
    }
}

export default Nav;





