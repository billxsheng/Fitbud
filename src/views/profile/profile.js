import React, { Component } from 'react';
import styles from './profile.css';
import CSSModules from 'react-css-modules';

class Profile extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div className="jumbotron" styleName="login-form">
        
            </div>
        )
    }
};


export default CSSModules(Profile, styles);