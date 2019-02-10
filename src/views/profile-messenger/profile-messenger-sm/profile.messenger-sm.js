import React, { Component } from 'react';
import styles from './profile-messenger-sm.css';
import CSSModules from 'react-css-modules';
import Navbar from '../../../components/navbar/navbar';
import ProfileMe from '../../../components/profile/profile-me';
import Messenger3 from '../../../components/messenger/sal/messenger-3';

class ProfileMessenger3 extends Component {


    render() {
        return (
            <div className="row">
                <ProfileMe/>
                <Messenger3/>
                <Navbar/>
            </div>
        )
    }
};


export default CSSModules(ProfileMessenger3, styles);