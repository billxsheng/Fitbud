import React, { Component } from 'react';
import styles from './navbar.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';

class Navbar extends Component {
    render() {
        return (
            <div styleName="navbar">

            </div>
        )
    }
};


export default CSSModules(Navbar, styles, {allowMultiple: true});