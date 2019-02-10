import React, { Component } from 'react';
import styles from './profile-messenger-lb.css';
import CSSModules from 'react-css-modules';
import Navbar from '../../../components/navbar/navbar';
import ProfileMe from '../../../components/profile/profile-me';
import Messenger1 from '../../../components/messenger/lebron/messenger-1';

class ProfileMessenger2 extends Component {


    render() {
        return (
            <div className="row">
                <ProfileMe/>
                <Messenger1/>
                <Navbar/>
            </div>
        )
    }
};


export default CSSModules(ProfileMessenger2, styles);