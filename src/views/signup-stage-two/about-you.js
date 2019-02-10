import React, { Component } from 'react';
import styles from './about-you.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';

class AboutYou extends Component {

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
                <h1>We want to learn more about you!</h1>
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label>Fitness Style</label>
                    </div>
                    <div className="form-group">
                        <input name="first-name" type="first-name" ></input>
                    </div>
                    <div className="form-group">
                        <label>About Me</label>
                    </div>
                    <div className="form-group">
                        <textarea name="last-name" type="last-name" ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Current Bests</label>
                    </div>
                    <div className="form-group">
                        <input name="age" type="age" ></input>
                    </div>
                    <div className="form-group">
                        <label>Current Goals</label>
                    </div>
                    <div className="form-group">
                        <input name="phone" type="phone" ></input>
                    </div>
                    <div className="form-group">
                        <label>What is your current gym?</label>
                    </div>
                    <div className="form-group">
                        <input name="password" type="password" ></input>
                    </div>
                    <div className="form-group">
                        <Link to="/login" className="btn btn-submit" type="submit" value="Submit">Submit</Link>
                    </div>
                </form>
            </div>
        )
    }
};


export default CSSModules(AboutYou, styles);