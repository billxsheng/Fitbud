import React, { Component } from 'react';
import styles from './profile.css';
import CSSModules from 'react-css-modules';
import Navbar from '../../components/navbar/navbar';

class Profile extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div className="jumbotron">
                <h1>Profile</h1>
                <Navbar/>
            </div>
        )
    }
};


export default CSSModules(Profile, styles);