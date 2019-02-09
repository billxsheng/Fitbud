import React, { Component } from 'react';
import styles from './login.css';
import CSSModules from 'react-css-modules';
import axios from 'axios';

class Login extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm = (event) => {
        event.preventDefault();
        axios.post('http://localhost:1800/login', {
            phone: event.target.phone.value,
            password: event.target.password.value
        }).then((res) => {
            if(res.data.success) {
                console.log('redirect')
                //redirect
            } else {
                console.log('dont redirect')
                //do nothing
            }
        }).catch(() => {
            console.log('Error')
        })
    }
    render() {
        return (
            <div className="jumbotron">
                <h1>Login</h1>
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label>Phone Number</label>
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


export default CSSModules(Login, styles);