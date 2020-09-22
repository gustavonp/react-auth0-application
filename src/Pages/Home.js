import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

class Home extends Component {
    render() {
        const { isAuthenticated, login } = this.props.auth;
        return (
            <div className="callout">
              <h1>Home</h1>
              {isAuthenticated() ? (
                  
                  <Button color="primary" variant="contained" >
                      <Link to="/profile">View profile</Link>
                  </Button>
                  ) : (
                    <Button color="secondary" variant="contained" onClick={login}>Log in</Button>
                  )} 
            </div>
        );
    }
}

export default Home;