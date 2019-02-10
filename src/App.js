import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './views/signup/signup';
import Login from './views/login/login';
import Landing from './views/landing/landing';
import findFriends from './components/find-friends/find-friends';
import findFriends2 from './components/find2/find-friends2';
import aboutYou from './views/signup-stage-two/about-you';
import profileFeed from './views/profile-feed/profile-feed';
import profileCheckIn from './views/profile-check-in/profile-check-in';
import axios from 'axios';
import profileMessengerLb from './views/profile-messenger/profile-messenger-lb/profile.messenger-lb';
import profileMessengerJf from './views/profile-messenger/profile-messenger-jf/profile.messenger-jf';
import profileMessengerSm from './views/profile-messenger/profile-messenger-sm/profile.messenger-sm';
import session from './views/session/session';


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
  const token = 'BQB8GJENM_n8EGeL_hoaovyz1XcEcVPbnn4INwf4mLemQbU-OrUhUPnM50LUAEUTAZv3Ud-Aa2j9mmR-6wTZTgUUxYkOLKIjvgFMjAmqO3ktXXIOO4bWJcAkeGxAlvLi8bfIzG8x_6ASsj_u4stiboUbyLKM_I9FnQUcgZYr';
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
      console.log(device_id);
    });

    this.player.on('player_state_changed', state => this.onStateChanged(state));
  }


  onStateChanged(state) {
    // if we're no longer listening to music, we'll get a null state.
    if (state !== null) {
      const {
        current_track: currentTrack,
        position,
        duration,
      } = state.track_window;
      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const artistName = currentTrack.artists
        .map(artist => artist.name)
        .join(", ");
      const playing = !state.paused;
      this.setState({
        position,
        duration,
        trackName,
        albumName,
        artistName,
        playing
      });
    }
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

  

  onPrevClick() {
    this.player.previousTrack();
    
  }
  
  onPlayClick() {
    this.player.togglePlay();
  }
  
  onNextClick() {
    this.player.nextTrack();

  }

connect(){
  console.log("connected")
  setTimeout(
    function() {
      this.checkForPlayer();
    }
    .bind(this),
    4000
);
  }



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
        <Route exact path="/find-friends/page_2" component={findFriends2}/>
        <Route exact path="/profile/chat/lebron-james" component={profileMessengerLb}/>
        <Route exact path="/profile/chat/justin-fields" component={profileMessengerJf}/>
        <Route exact path="/profile/chat/sal-murphy" component={profileMessengerSm}/>
        <Route exact path="/profile/session" component={session}/>
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
