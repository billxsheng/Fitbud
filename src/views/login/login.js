import React, { Component } from 'react';
import styles from './login.css';
import CSSModules from 'react-css-modules';

class Login extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="jumbotron">√
                <h1>FitBud</h1>
            </div>
        )
    }
};


export default CSSModules(Login, styles);