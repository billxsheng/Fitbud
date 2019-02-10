import React, { Component } from 'react';
import styles from './find-friends.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';

class FindFriends2 extends Component {
    render() {
        return (
        <div className="row moveDown">
            <div styleName="btn-back-div">
                <Link to="/profile/feed" styleName="btn-back" className="btn">Back</Link>
            </div>
            <div className="col-1" styleName="moveBareDown">
                <i className=" ml-5 fas fa-chevron-circle-left" styleName="iconSize orange grow-large"></i>
            </div>
            <div className="col">
                <div className="card mx-auto" styleName="bRadMain tile grow" style={{"width": "17rem"}}>
                    <img className="card-img-top" styleName="bRadPic" src={require('../../assets/person4.jpg')}/>
                    <div className="card-body">
                        <h3>Joanna Johns</h3>
                        <h6 className="card-subtitle ">Style</h6>
                        <p className="card-text text-muted">Calisthenics </p>
                        <h6 className="card-subtitle ">About Me</h6>
                        <p className="card-text text-muted">
                           Hello, new to this gym. I'm excited to meet people who will challenge and push me to my limits everyday!</p>
                        <hr/>
                        <div className="row">
                            <div className="col-10">
                                <a href="#" className="btn btn-primary" styleName="decWidth message-orange bRadMain grow">Message</a>
                            </div>
                            <div className="col">
                                hi </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card mx-auto" styleName="bRadMain tile grow" style={{"width": "17rem"}}>
                    <img className="card-img-top" styleName="bRadPic" src={require('../../assets/person5.jpg')}/>
                    <div className="card-body">
                        <h3>Varoon Gupta</h3>
                        <h6 className="card-subtitle ">Style</h6>
                        <p className="card-text text-muted">Crossfit</p>
                        <h6 className="card-subtitle ">About Me</h6>
                        <p className="card-text text-muted">If anyone here plays Ultimate Frisbee, just know I'm always down to run some games!</p>
                        <hr/>
                        <div className="row">
                            <div className="col-10">
                                <a href="#" className="btn btn-primary" styleName="decWidth message-orange bRadMain grow">Message</a>
                            </div>
                            <div className="col">
                                hi </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="col">
                <div className="card mx-auto" styleName="bRadMain tile grow" style={{"width": "17rem"}}>
                    <img className="card-img-top" styleName="bRadPic" src={require('../../assets/person6.jpg')}/>
                    <div className="card-body">
                        <h3>Timothy James</h3>
                        <h6 className="card-subtitle ">Style</h6>
                        <p className="card-text text-muted">Olympic Weightlifting</p>
                        <h6 className="card-subtitle ">About Me</h6>
                        <p className="card-text text-muted">Currently training for National's 2019. I'm not as scary as I seem! Say hi!</p>
                        <hr/>
                        <div className="row">
                            <div className="col-10">
                                <a href="#" className="btn btn-primary" styleName="decWidth message-orange bRadMain grow">Message</a>
                            </div>
                            <div className="col">
                                hi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-1" styleName="moveBareDown">
               <i className="mr-5 fas fa-chevron-circle-right" styleName="iconSize orange grow-large"></i>
            </div>
        </div> 
        )
    }
};


export default CSSModules(FindFriends2, styles, {allowMultiple: true});