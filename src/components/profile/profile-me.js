import React, { Component } from 'react';
import styles from './profile-me.css';
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules';

class ProfileMe extends Component {
    render() {
        return (
            <div className="col-md-3" styleName="tile">

                <div className="card mx-auto mt-4 text-center" styleName="bgCard" style={{ "width": "20rem" }}>
                    <h1 className="my-2" styleName="orange">Alan Xie</h1>
                    <p>19 / Male / Waterloo</p>

                    <img src={require('../../assets/alan.jpg')} className="card-img-top mx-auto" styleName="roundAlan" />


                    <div className="card-body">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <h6>Style</h6>
                                    <p>Powerlifting</p>
                                    <h6>About Me</h6>
                                    <p>When I lost my gym buddies, I lost my motivation. Looking for a FitBuddy to bring me back! 😤💪</p>
                                    <h6>Current Gym</h6>
                                    <p>GoodLife Fitness Ottawa Queen Street</p>
                                    <br></br>
                                    
                                </div>
                                <div className="carousel-item">
                                    <h6>Current</h6>
                                    <p className="my-0">Bench Press: 150lb</p>
                                    <p className="my-0">Squat: 70lb</p>
                                    <p className="mt-0">Deadlift: 120lb</p>
                                    <h6>My Goals</h6>
                                    <p className="my-0">Bench Press: 150lb</p>
                                    <p className="my-0">Squat: 100lb</p>
                                    <p className="mt-0">Deadlift: 225lb</p>
                                    <h6></h6>
                                    <br></br>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                        <Link to="/" className="btn btn-primary" styleName="settings-orange bRadSettings grow">Logout</Link>
                    </div>
                </div>
            </div>
        )
    }
};


export default CSSModules(ProfileMe, styles, { allowMultiple: true });