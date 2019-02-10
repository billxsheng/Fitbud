import React, { Component } from 'react';
import styles from './profile-check-in.css';
import CSSModules from 'react-css-modules';
import Navbar from '../../components/navbar/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfileMe from '../../components/profile/profile-me';


class ProfileCheckIn extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        return(
            <div>
                <Navbar/>
            </div>
        )
    }
};


export default CSSModules(ProfileCheckIn, styles);