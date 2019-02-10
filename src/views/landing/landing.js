import React, { Component } from 'react';
import styles from './landing.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';

class Landing extends Component {
    render() {
        return (
            <div className="jumbotron" styleName="background">
                <div className="row pb-5">
                    <img styleName="image" src={require('../../assets/logo.png')}></img>
                </div>
                <div className="row" styleName="btn-row">
                    <div className="col-md-6">
                        <Link to="/login" className="btn btn-primary" styleName="btn-landing grow">Login</Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/signup" className="btn btn-primary" styleName="btn-landing grow">Sign Up</Link>
                    </div>
                </div>
            </div>
        )
    }
};


export default CSSModules(Landing, styles, {allowMultiple: true});