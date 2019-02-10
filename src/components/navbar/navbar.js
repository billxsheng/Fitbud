import React, { Component } from 'react';
import styles from './navbar.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';

class Navbar extends Component {
    getGymInfo()  {
        alert("Current Gym: GoodLife Fitness Ottawa Queen Street\nGym Rating: 5 Stars\nNumber of Fitness Buddies in the gym: 5\nDistance from your location: 1.9km (9 minutes)")
    }

    render() {
        return (
                <div styleName="navbar" className="col-md-1">
                    <div styleName="feed-btn-cont">
                        <Link to="/profile/feed"><i styleName="feed-btn grow-large" className="fas fa-bars"></i></Link>                 
                    </div>
                    <hr></hr>
                    <Link to="/profile/chat/lebron-james"><div styleName="feed-btn-msg msg1 grow-large"></div></Link>                 
                    <Link to="/profile/chat/justin-fields"><div styleName="feed-btn-msg msg2 grow-large"></div></Link>                 
                    <Link to="/profile/chat/sal-murphy"><div styleName="feed-btn-msg msg3 grow-large"></div></Link> 
                    <hr></hr>             
                    <div styleName="feed-btn-cont">
                        <Link to="/find-friends"><i styleName="feed-btn grow-large" className="fas fa-user-friends"></i></Link>                 
                    </div>
                    <div styleName="feed-btn-cont">
                        <a onClick={() => this.getGymInfo()} styleName="btn-gym-info grow-large" to="#"><i styleName="feed-btn" className="fas fa-dumbbell"></i></a>                 
                    </div>
                    <div styleName="feed-btn-cont">
                        <Link to="/profile/check-in"><i styleName="feed-btn grow-large" className="fas fa-map-marker-alt"></i></Link>                 
                    </div>
                </div>      
        )
    }
};


export default CSSModules(Navbar, styles, {allowMultiple: true});