import React, { Component } from 'react';
import styles from './signup.css';
import CSSModules from 'react-css-modules';

class Signup extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div className="container">
                <h1>Signup</h1>
            </div>
        )
    }
};

export default CSSModules(Signup, styles);