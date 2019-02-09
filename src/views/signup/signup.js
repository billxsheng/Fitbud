import React, { Component } from 'react';
import styles from './signup.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';

class Signup extends Component {

    state = {
        submitted: false
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({submitted: true})
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
                        <input name="first-name" type="first-name" ></input>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                    </div>
                    <div className="form-group">
                        <input name="last-name" type="last-name" ></input>
                    </div>

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
                        <Link to="/login" className="btn btn-submit" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
};


export default CSSModules(Signup, styles);