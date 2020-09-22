import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="callout">
              <h1>About</h1>  

              <h3>React.js Auth0 application</h3>

              <p>This application is an example of using Auth0 for autentication and usage of user scopes.</p>

              <p>Once you run the application you will be able to either check the public page or sign up at Auth0 or sign in using your Google account. When you are logged in you will be able to see information exclusive for registered users.</p>
              <p>Logging with a gmail account will automatically give you an admin role, thus, granting you access to exclusive content returned from the API.</p>

              <h4>Dependencies used</h4>

              <ul>
                  <li>auth0</li>
                  <li>express / express-jwt</li>
                  <li>material-ui</li>
              </ul>

              <p>Check out my <a href="https://www.linkedin.com/in/gustavo-nogueira-pereira-2a230259/" target="_blank">LinkedIn</a> profile and other samples on my <a href="https://github.com/gustavonp" target="_blank">GitHub</a>.</p>

            </div>
        );
    }
}

export default About;