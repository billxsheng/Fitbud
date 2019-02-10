import React, { Component } from 'react';
import styles from './profile-messenger-jf.css';
import CSSModules from 'react-css-modules';
import Navbar from '../../../components/navbar/navbar';
import ProfileMe from '../../../components/profile/profile-me';
import Messenger2 from '../../../components/messenger/justin/messenger-2';

class ProfileMessenger1 extends Component {


    render() {
        return (
            <div className="row">
                <ProfileMe/>
                <Messenger2/>
                <Navbar/>
            </div>
        )
    }
};


export default CSSModules(ProfileMessenger1, styles);