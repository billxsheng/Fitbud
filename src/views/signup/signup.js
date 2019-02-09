import React, { Component } from 'react';
import styles from './signup.css';
import CSSModules from 'react-css-modules';
import axios from 'axios';

class Signup extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm = (event) => {
        //redirect to /login
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>Signup</h1>
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label>First Name</label>
                    </div>
                    <div className="form-group">
                        <input name="phone" type="phone" ></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                    </div>
                    <div className="form-group">
                        <input name="password" type="password" ></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
};


export default CSSModules(Signup, styles);