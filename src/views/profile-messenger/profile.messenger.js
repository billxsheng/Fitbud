import React, { Component } from 'react';
import styles from './profile-messenger.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';
import Navbar from '../../components/navbar/navbar';
import Messenger from '../../components/messenger/messenger';
import ProfileMe from '../../components/profile/profile-me';

class ProfileMessenger extends Component {


    render() {
        return (
            <div className="row">
                <ProfileMe/>
                <Messenger/>
               <Navbar/>
            </div>
        )
    }
};


export default CSSModules(ProfileMessenger, styles);