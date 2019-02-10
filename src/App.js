import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './views/signup/signup';
import Login from './views/login/login';
import Profile from './views/profile/profile-feed';
import Landing from './views/landing/landing';
import findFriends from './components/find-friends/find-friends';
import aboutYou from './views/signup-stage-two/about-you';
import profileFeed from './views/profile-feed/profile-feed';
import profileCheckIn from './views/profile-check-in/profile-check-in';

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
        <Route exact path="/tell-us-about-yourself" component={aboutYou}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile/feed" component={profileFeed}/>
        <Route exact path="/profile/check-in" component={profileCheckIn}/>
        <Route exact path="/find-friends" component={findFriends}/>
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
