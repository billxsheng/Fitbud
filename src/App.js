import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './views/signup/signup';
import Login from './views/login/login';
import Profile from './views/profile/profile';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={Profile}/>
      </Switch>
    )

    return (
      <div>
          <BrowserRouter>
            <div className="App">
                {routes}
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
