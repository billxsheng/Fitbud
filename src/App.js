import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './views/signup/signup';
import Login from './views/login/login';
import Profile from './views/profile/profile';
import Landing from './views/landing/landing';
import axios from 'axios';

class App extends Component {

  // componentDidMount() {
  //   axios.get('https://api.github.com/users/maecapozzi')
  //   .then(response => console.log(response))
  //   fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=ElginFitness&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDTSfOsB_Kse4D3cIuoBrUzfSElywL0fjs")
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //      console.log(result)
  //     },
  //     (error) => {
  //     }
  //   )
  // };


  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Landing} ></Route>
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
