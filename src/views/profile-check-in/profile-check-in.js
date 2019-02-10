import React, { Component } from 'react';
import styles from './profile-check-in.css';
import CSSModules from 'react-css-modules';
import Navbar from '../../components/navbar/navbar';
import pic from './planner.png';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfileMe from '../../components/profile/profile-me';


class ProfileCheckIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gymCor: {},
            currentCor: {},
         
        };
      }
    

    getCurrentLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            console.log(pos)
            return pos;
          })
        }
      }

    componentDidMount() {
        window.scrollTo(0,0);
        
    }


  getGymLocation(){
        fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=GoodLife%20Fitness%20Ottawa%20Queen%20Street&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDTSfOsB_Kse4D3cIuoBrUzfSElywL0fjs")
        .then(res => res.json())
        .then(
          (result) => {
           console.log(result)
           this.setState({gymCor:result});
          },
          (error) => {
            alert("please refresh the page")

          }
        )
    }

    compareLocation(){
        this.getGymLocation();
        var pos = this.getCurrentLocation();
        
    
        setTimeout(
            function() {
                var cCor = this.state.gymCor.candidates[0].geometry.location
                var currentCorr = this.getCurrentLocation();
           if(this.state.currentCor != this.state.gymCor){
               alert(`The gym on your profile (Goodlife Fitness Ottawa is Lat: ${cCor.lat} and Lng: ${cCor.lng}, but your current location is Lat: ${currentCorr.lat} and Lng: ${currentCorr.lng}`)
           }
            }
            .bind(this),
            6000
        );

        
    }

    

    render() {

        return(
            
            <div className = "row">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={() => this.onPrevClick()}>Back</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.onPlayClick()}>Pause/Play</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.onNextClick()}>Next</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.connect()}>connect</button>
            <p className="display-5" >{this.state.trackName}</p>
            </div>
            <div className = "col-11 center text-center" styleName="main-area">
            <a className="btn btn-primary btn-lg" onClick={() => this.compareLocation()}>Settings</a>


            </div>
                <Navbar/>
            </div>
        )
    }
};


export default CSSModules(ProfileCheckIn, styles);