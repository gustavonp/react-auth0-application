import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    getActiveUrl(urlPath){
        return this.props.history.location.pathname === urlPath ? "is-active" : '';
    }
    
    render() {

        console.log(this.props.history.location.pathname);

        const { isAuthenticated, login, logout, userHasScopes } = this.props.auth;
        return (
            <nav>
                <ul className="menu">
                    <li className={this.getActiveUrl('/')}><Link to="/">Home</Link></li>
                    <li className={this.getActiveUrl('/profile')}><Link to="/profile">Profile</Link></li>
                    <li className={this.getActiveUrl('/public')}><Link to="/public">Public</Link></li>
                    
                    {isAuthenticated() && (
                        <li className={this.getActiveUrl('/private')}><Link to="/private">Private</Link></li>
                    )}

                    {isAuthenticated() && userHasScopes(['read:courses']) && (
                        <li className={this.getActiveUrl('/course')}><Link to="/course">Courses</Link></li>
                    )}

                    <li>
                        <button className="button secondary" onClick={isAuthenticated() ? logout : login}>
                            {isAuthenticated() ? 'Log Out' : 'Log In'}
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;