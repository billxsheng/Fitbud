import React, { Component } from 'react';
import styles from './about-you.css';
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules';

class AboutYou extends Component {

    state = {
        submitted: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({ submitted: true })
    }

    render() {
        return (
            <div className="text-center mx-auto card mt-5" styleName="cardBorder" style={{ "width": "35rem" }}>
                <br />
                <br />
                <img className="mx-auto" styleName="image" src={require('../../assets/logo.png')}></img>
                <h5 className="px-5" styleName="orange3">We want to learn more about you!</h5>
                <form onSubmit={this.submitForm}>
                    <div className="form-group mt-3 mb-0">
                        <h5><label>Fitness Style</label></h5>
                    </div>
                    <div className="form-group">
                        <input name="first-name" styleName="bRadForm3" type="first-name" ></input>
                    </div>
                    <div className="form-group mb-0">
                        <h5><label>About Me</label></h5>
                    </div>
                    <div className="form-group">
                        <textarea name="last-name" styleName="bRadForm3" type="last-name" ></textarea>
                    </div>
                    <div className="form-group mb-0">
                        <h5><label>Current Bests</label></h5>
                    </div>
                    <div className="form-group">
                        <input name="age" styleName="bRadForm3" type="age" ></input>
                    </div>
                    <div className="form-group mb-0">
                        <h5><label>Current Goals</label></h5>
                    </div>
                    <div className="form-group">
                        <input name="phone" styleName="bRadForm3" type="phone" ></input>
                    </div>
                    <div className="form-group mb-0">
                        <h5><label>What is your current gym?</label></h5>
                    </div>
                    <div className="form-group">
                        <input name="password" styleName="bRadForm3" type="password" ></input>
                    </div>
                    <div className="form-group">
                        <Link to="/login" className="btn btn-submit" styleName="brdRadBtn3" value="Submit">Submit</Link>
                    </div>
                </form>
            </div>
        )
    }
};


export default CSSModules(AboutYou, styles);