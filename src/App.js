import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './views/signup/signup';
import Login from './views/login/login';
import Profile from './views/profile-feed/profile-feed';
import Landing from './views/landing/landing';
import findFriends from './components/find-friends/find-friends';
import aboutYou from './views/signup-stage-two/about-you';
import profileFeed from './views/profile-feed/profile-feed';
import profileCheckIn from './views/profile-check-in/profile-check-in';
import profileMessenger from './views/profile-messenger/profile.messenger';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: "",
      deviceId: "",
      loggedIn: false,
      error: "",
      trackName: "Track Name",
      artistName: "Artist Name",
      albumName: "Album Name",
      playing: false,
      position: 0,
      duration: 0,
    };
  }

  checkForPlayer() {
    
    
    console.log("acitavted")
  const token = 'BQAXc4M6j8boBdW6MwI70Pg6csn_Y-sWrEVeX970fbLh2kQ0h99o3FhVqSCgSLHCaxeW00H_Am_x5ioCWOLftQXGJRmPdN8EP_eaAun4QdC5s3wLPUHPvqJdLTqMtkdzmrlXQ-gh58toOnhR8zirV8p6O_r0tJlBvRC0IAI03g';
    if (window.Spotify !== null) {
      this.player = new window.Spotify.Player({
        name: "Testing",
        getOAuthToken: cb => { cb(token); },
      });
        this.createEventHandlers();
  
      // finally, connect!
      this.player.connect();
    }

    
  }

  createEventHandlers() {
    this.player.on('initialization_error', e => { console.error(e); });
    this.player.on('authentication_error', e => {
      console.error(e);
      this.setState({ loggedIn: false });
    });
    this.player.on('account_error', e => { console.error(e); });
    this.player.on('playback_error', e => { console.error(e); });
  
    // Playback status updates
    this.player.on('player_state_changed', state => { console.log(state); });
  
    // Ready
    this.player.on('ready', data => {
      let { device_id } = data;
      console.log("Let the music play on!");
      // this.setState({ deviceId: device_id });
    });
  }

  











  componentDidMount() {
    axios.get('https://api.github.com/users/maecapozzi')
    .then(response => console.log(response))
    fetch("BQClh4acc-6kmUj1ZGsmboSHw-iv89eDmp7ATCu1eqqQUCg2C6ji4HkIrMDxsGeRk9BJtR9_9Wwd6ipZjOAKmbb4xeTYmO3SN4TNIkfNofsjXTGxAoOwUcnRoiVdwRC0qaO_Ie-Adm64jB5aI3bvXu6xVhBSMXGV3ckyl1XB")
    .then(res => res.json())
    .then(
      (result) => {
       console.log(result)
      },
      (error) => {
      }
    )
  };

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos)
      })
    }
  }


  render() {

    this.getCurrentLocation();

    setTimeout(
      function() {
        this.checkForPlayer();
      }
      .bind(this),
      5000
  );
    
  

    let routes = (
      <Switch>
        <Route exact path="/" component={Landing} ></Route>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/tell-us-about-yourself" component={aboutYou}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile/feed" component={profileFeed}/>
        <Route exact path="/profile/check-in" component={profileCheckIn}/>
        <Route exact path="/find-friends" component={findFriends}/>
        <Route exact path="/profile/lebron-james" component={profileMessenger}/>
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
