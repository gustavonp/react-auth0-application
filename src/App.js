import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Nav from "./Components/Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import Public from "./Pages/Public";
import Private from "./Pages/Private";
import Courses from "./Pages/Courses";
import About from "./Pages/About";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "./AuthContext";

import Footer from "./Components/Footer";

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    // this.auth = new Auth(this.props.history);
    this.state = {
      auth : new Auth(this.props.history), //the history is within the props since our App is being rendered inside a React-router
      tokenRenewalComplete : false
    };
  }

  componentDidMount() {
    this.state.auth.renewToken(() =>
      this.setState({tokenRenewalComplete : true})
    );
  }

  render() {
    const { auth } = this.state;
    //Show loading
    if(!this.state.tokenRenewalComplete) return "Loading . . .";
    return (
      <AuthContext.Provider value={auth}>
        <div className="page-container">
        <Nav auth={auth} location={this.props} />
          <div className="content-wrap">
          <Switch>
            <Route 
              path="/"
              exact
              render={props => <Home auth={auth} {...props} />}
            />
            <Route 
              path="/callback"
              render={props => <Callback auth={auth} {...props} />}
            />
            <Route 
              path="/public"
              render={props => <Public auth={auth} {...props} />}
            />
            <Route 
              path="/about"
              render={props => <About/>}
            />
            <PrivateRoute
              path="/private"
              component={Private}
            />
            <PrivateRoute 
              path="/course"
              component={Courses}
              scopes={["read:courses"]}
            />
            <PrivateRoute 
              path="/profile"
              component={Profile}
            />
          </Switch>
          </div>
        <Footer/>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
