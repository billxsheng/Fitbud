import React, { Component } from 'react';
import styles from './profile-check-in.css';
import CSSModules from 'react-css-modules';
import Navbar from '../../components/navbar/navbar';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
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
        var pos; 
        this.getGymLocation();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              console.log(pos)
            })
          }

  
            fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=GoodLife%20Fitness%20Ottawa%20Queen%20Street&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDTSfOsB_Kse4D3cIuoBrUzfSElywL0fjs")
            .then(res => res.json())
            .then(
              (res) => {
             
               setTimeout(
                function() {
                    var cCor = this.state.gymCor.candidates[0].geometry.location
                    if(pos != this.state.gymCor){
                        alert(`The gym on your profile (Goodlife Fitness Ottawa Queen) is Lat: ${cCor.lat} and Lng: ${cCor.lng}, but your current location (Lamoureux) is Lat: ${pos.lat} and Lng: ${pos.lng}`)
                    }
                  
               
                }
                .bind(this),
                4000
            );
              },
              (error) => {
                alert("please refresh the page")
    
              }
            )
    }
    
    render() {

        return(
            
            <div className = "row">
           
            <div className = "col-11 center text-center" styleName="main-area">
            <div styleName="pop-up" id="pop-up" > </div>
            <a className="btn btn-primary btn-lg" styleName="orgBtn1" onClick={() => this.compareLocation()}>Check In</a>
            <Link to="/profile/session" className="btn btn-primary btn-lg ml-5" styleName="orgBtn2">Bypass</Link>
            </div>
                <Navbar/>
            </div>
        )
    }
};


export default CSSModules(ProfileCheckIn, styles); 