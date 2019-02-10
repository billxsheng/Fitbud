import React, { Component } from 'react';
import styles from './find-friends.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';

class FindFriends extends Component {
    render() {
        return (
        <div className="row moveDown">
            <div>
                <Link to="/profile/feed" styleName="btn-back" className="btn">Back</Link>
            </div>
            <div className="col-1" styleName="moveBareDown">
                <i className=" ml-5 fas fa-chevron-circle-left" styleName="iconSize orange grow-large"></i>
            </div>
            <div className="col">
                <div className="card mx-auto" styleName="bRadMain tile grow" style={{"width": "17rem"}}>
                    <img className="card-img-top" styleName="bRadPic" src={require('../../assets/person1.jpg')}/>
                    <div className="card-body">
                        <h3>Jordan Carter</h3>
                        <h6 className="card-subtitle ">Style</h6>
                        <p className="card-text text-muted">Powerlifting</p>
                        <h6 className="card-subtitle ">About Me</h6>
                        <p className="card-text text-muted">
                            Any newbies can hit me up for some form checks or help!</p>
                        <hr/>
                        <div className="row">
                            <div className="col-9">
                                <a href="#" className="btn btn-primary" styleName="decWidth message-orange bRadMain grow">Message</a>
                            </div>
                            <div className="col">
                                <img src={require("../../assets/unstar.png")} className="mt-1" styleName="starSize"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card mx-auto" styleName="bRadMain tile grow" style={{"width": "17rem"}}>
                    <img className="card-img-top" styleName="bRadPic" src={require('../../assets/person2.jpg')}/>
                    <div className="card-body">
                        <h3>Veronica Finch</h3>
                        <h6 className="card-subtitle ">Style</h6>
                        <p className="card-text text-muted">Cardio and Yoga</p>
                        <h6 className="card-subtitle ">About Me</h6>
                        <p className="card-text text-muted">Hit me up if
                            you ever want to have a sick workout session!</p>
                        <hr/>
                        <div className="row">
                            <div className="col-9">
                                <a href="#" className="btn btn-primary" styleName="decWidth message-orange bRadMain grow">Message</a>
                            </div>
                            <div className="col">
                            <img src={require("../../assets/unstar.png")} className="mt-1" styleName="starSize"></img>

                                </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="col">
                <div className="card mx-auto" styleName="bRadMain tile grow" style={{"width": "17rem"}}>
                    <img className="card-img-top" styleName="bRadPic" src={require('../../assets/person3.jpg')}/>
                    <div className="card-body">
                        <h3>Jake Misra</h3>
                        <h6 className="card-subtitle ">Style</h6>
                        <p className="card-text text-muted">Bodybuilding</p>
                        <h6 className="card-subtitle ">About Me</h6>
                        <p className="card-text text-muted">The L in legs
                            stands for loser. #aesthetics #physiquelife</p>
                        <hr/>
                        <div className="row">
                            <div className="col-9">
                                <a href="#" className="btn btn-primary" styleName="decWidth message-orange bRadMain grow">Message</a>
                            </div>
                            <div className="col">
                            <img src={require("../../assets/unstar.png")} className="mt-1" styleName="starSize"></img>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-1" styleName="moveBareDown">
            <Link to="/find-friends/page_2"><i className="mr-5 fas fa-chevron-circle-right" styleName="iconSize orange grow-large" ></i></Link>
            </div>
        </div> 
        )
    }
};


export default CSSModules(FindFriends, styles, {allowMultiple: true});