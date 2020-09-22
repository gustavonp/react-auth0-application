import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        const { isAuthenticated, login } = this.props.auth;
        return (
            <div className="callout">
              <h1>Home</h1>
              {isAuthenticated() ? (
                  <Link className="button" to="/profile">View profile</Link>
                  ) : (
                    <button className="button secondary" onClick={login}>Log in</button>
                  )} 
            </div>
        );
    }
}

export default Home;