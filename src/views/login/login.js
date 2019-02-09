import React, { Component } from 'react';
import styles from './login.css';
import CSSModules from 'react-css-modules';
import axios from 'axios';

class Login extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
        this.login = this.login.bind(this)
    }

    login = (event) => {
        // axios.post('/login', )
    }
    render() {
        return (
            <div className="jumbotron">
                <h1>Login</h1>
                <a className="btn btn-primary" onClick={this.login}>Login</a>
            </div>
        )
    }
};


export default CSSModules(Login, styles);