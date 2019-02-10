import React, { Component } from 'react';
import styles from './profile-feed.css';
import CSSModules from 'react-css-modules';
import Navbar from '../../components/navbar/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfileMe from '../../components/profile/profile-me';
import FeedPost from '../../components/feed-post/feed-post';


class ProfileFeed extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        return(
            <div className="row">
                <ProfileMe/>
                <FeedPost/>
                <Navbar/>
            </div>
        )
    }
};


export default CSSModules(ProfileFeed, styles);