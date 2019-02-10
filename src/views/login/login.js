import React, { Component } from 'react';
import styles from './login.css';
import CSSModules from 'react-css-modules';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Login extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm = (event) => {
        event.preventDefault();
        axios.post('http://localhost:1800/login', {
            phone: event.target.phone.value,
            password: event.target.password.value
        }).then((res) => {
            if (res.data.success) {
                console.log('redirect')
                this.props.history.push("/profile/feed");
            } else {
                console.log('dont redirect')
                this.props.history.push("/login");
            }
        }).catch(() => {
            console.log('Error')
        })
    }

    render() {
        return (
            
            <div className="text-center mx-auto card mt-5" styleName="cardBorder" style={{"width": "35rem"}}>
                <br/>
                <br/>
                <img className = "mx-auto" styleName="image" src={require('../../assets/logo.png')}></img>
                <form onSubmit={this.submitForm}>
                    <div className="form-group mt-5">
                        <h5><label>Phone Number</label></h5>
                    </div>
                    <div className="form-group" >
                        <input name="phone" styleName="brdRadForm" type="phone" ></input>
                    </div>
                    <div className="form-group">
                        <h5><label>Password</label></h5>
                    </div>
                    <div className="form-group">
                        <input name="password" styleName="brdRadForm" type="password" ></input>
                    </div>
                    <br/>
                    <div className="form-group" styleName = "grow">
                        <input type="submit" styleName="brdRadBtn" value="Login" />
                    </div>
                    <br/> 
                </form>
            </div>
        )
    }
};


export default withRouter(CSSModules(Login, styles));