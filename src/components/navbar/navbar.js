import React, { Component } from 'react';
import styles from './navbar.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';

class Navbar extends Component {
    render() {
        return (
                <div styleName="navbar" className="col-md-1">
                    <div styleName="feed-btn-cont">
                        <Link to="/profile/feed"><i styleName="feed-btn" className="fas fa-bars"></i></Link>                 
                    </div>
                    <hr></hr>
                    <Link to="/profile/msg"><div styleName="feed-btn-msg msg1"></div></Link>                 
                    <Link to="/profile/msg"><div styleName="feed-btn-msg msg2"></div></Link>                 
                    <Link to="/profile/msg"><div styleName="feed-btn-msg msg3"></div></Link> 
                    <hr></hr>             
                    <div styleName="feed-btn-cont">
                        <Link to="/find-friends"><i styleName="feed-btn" className="fas fa-user-friends"></i></Link>                 
                    </div>
                    <div styleName="feed-btn-cont">
                        <Link to="/profile/check-in"><i styleName="feed-btn" className="fas fa-map-marker-alt"></i></Link>                 
                    </div>
                </div>      
        )
    }
};


export default CSSModules(Navbar, styles, {allowMultiple: true});