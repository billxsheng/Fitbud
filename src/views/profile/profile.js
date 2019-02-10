import React, { Component } from 'react';
import styles from './profile.css';
import CSSModules from 'react-css-modules';
import Navbar from '../../components/navbar/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfileMe from '../../components/profile/profile-me';


class Profile extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        let routes = (
            <Switch>
                {/* <Route path="/profile/msg" component={}/> */}
                {/* <Route path="/profile/find-friends" component={}/>  */}
            </Switch>
        )
        return(
            <div>
    
                        <Navbar/>
                        <ProfileMe/>
            </div>
        )
    }
};


export default CSSModules(Profile, styles);