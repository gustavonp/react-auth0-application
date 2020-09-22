import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import Public from "./Pages/Public";
import Private from "./Pages/Private";
import Courses from "./Pages/Courses";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "./AuthContext";

class App extends Component {
  constructor(props){
    super(props);
    // this.auth = new Auth(this.props.history);
    this.state = {
      auth : new Auth(this.props.history) //the history is within the props since our App is being rendered inside a React-router
    };
  }

  render() {
    const { auth } = this.state;
    return (
      <AuthContext.Provider value={auth}>
        <Nav auth={auth} {...this.props} />
        <div className="body">
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
      </AuthContext.Provider>
    );
  }
}

export default App;
