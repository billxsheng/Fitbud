import React, { Component } from 'react';
import styles from './session.css';
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules';
import Navbar from '../../components/navbar/navbar';
import axios from 'axios';
import pic from '../session/planner.png'


class Session extends Component {

    constructor(props) {
        super(props);
        this.state = {
          token: "",
          deviceId: "",
          loggedIn: false,
          error: "",
          trackName: "   ",
          artistName: "   ",
          albumName: "   ",
          playing: false,
          position: 0,
          duration: 0,
        };
      }
    
      checkForPlayer() {
        
        
        console.log("acitavted")
      const token = 'BQCXuKbnKejIcyJkXKkfGuiADzYZcMCMOQ_cd8vxjQHwK4YVcdRl7z5F9J_BH8jlvDcKtlStgEnEozeJVQM3yXc8T4nSqoLfev-j_5tGWl8JQl6cQvQXEypuDkV4dHvqne8mqVM44vSfjvlb1UyFjJWMImHULVjZgPf9PEuQ';
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
          alert(`FitBud is now connected to ${device_id}`);
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
        return (

           


            <div className="row">


<div styleName="background" className="col-md-11">
<div className="btn-group btn-group-lg mt-3" role="group" aria-label="Basic example" styleName="button-g">
                <button type="button" className="btn btn-secondary ml-5 mr-1" styleName="button-gl" onClick={() => this.onPrevClick()}>Back</button>
                <button type="button" className="btn btn-secondary mx-1" styleName="button-gl" onClick={() => this.onPlayClick()}>Pause/Play</button>
                <button type="button" className="btn btn-secondary mx-1" styleName="button-gl" onClick={() => this.onNextClick()}>Next</button>
                <button type="button" className="btn btn-secondary mx-1"  styleName="button-gl" onClick={() => this.connect()}>Connect</button>
                <button type="button" className="btn btn-secondary mx-1"  styleName="button-gl spec" onClick={() => this.connect()}>   Track Name: {this.state.trackName}  // Artist Name: {this.state.artistName}  // Album Name: {this.state.albumName}</button>
        
            </div>
            <div className="row">
            <div className="col-7">
            <img className="mx-auto" styleName="image" src={require('../session/planner.png')}></img>

            </div>
            <div className="col mt-5 mr-5">
                <h1>To-Do List: Day 8</h1>
                <ul class="list-group list-group-flush">
  <li class="list-group-item">Dumbbell Chest Press 50lbs 3x8 </li>
  <li class="list-group-item">Military Shoulder Press 40lbs 3x8 </li>
  <li class="list-group-item">Cable Fly 90lbs 3x10</li>
  <li class="list-group-item">Tricep Extensions 100lb 5x5</li>
  <li class="list-group-item">Dumbbell Chest Press 50lbs </li>

</ul>
                
            </div>
            </div>
            
            </div>

<div>
<Navbar/>
</div>

            </div>
            
        )
    }
};


export default CSSModules(Session, styles, {allowMultiple: true});