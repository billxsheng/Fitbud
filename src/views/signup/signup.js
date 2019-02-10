import React, { Component } from 'react';
import styles from './signup.css';
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules';

class Signup extends Component {

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
                <h5 className="px-5" styleName="orange2">Let's get started today!</h5>
                <form onSubmit={this.submitForm}>
                    <div className="form-group mt-3 mb-0">
                        <h5><label>First Name</label></h5>
                    </div>
                    <div className="form-group">
                        <input name="first-name" styleName="brdRadForm2" type="first-name" ></input>
                    </div>
                    <div className="form-group mb-0">
                        <h5><label>Last Name</label></h5>
                    </div>
                    <div className="form-group">
                        <input name="last-name" styleName="brdRadForm2" type="last-name" ></input>
                    </div>
                    <div className="form-group mb-0">
                        <h5><label>Age</label></h5>
                    </div>
                    <div className="form-group">
                        <input name="age" styleName="brdRadForm2" type="age" ></input>
                    </div>
                    <div className="form-group mb-0">
                        <h5><label>Phone Number</label></h5>
                    </div>
                    <div className="form-group">
                        <input name="phone" styleName="brdRadForm2" type="phone" ></input>
                    </div>
                    <div className="form-group mb-0">
                        <h5><label>Password</label></h5>
                    </div>
                    <div className="form-group">
                        <input name="password" styleName="brdRadForm2" type="password" ></input>
                    </div>
                    <br/>
                    <div className="form-group">
                        <Link to="/tell-us-about-yourself" className="btn btn-submit" styleName="brdRadBtn2" value="Submit">Submit</Link>
                    </div>
                </form>
            </div>
        )
    }
};


export default CSSModules(Signup, styles);