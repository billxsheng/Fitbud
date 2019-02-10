import React, { Component } from 'react';
import styles from './feed-post.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';

class FeedPost extends Component {
    render() {
        return (

            <div className="col-md-8" styleName="tile scrollY">
           <br/>
            <h1 styleName="orange">Newsfeed</h1>
            <br></br>
            <div className="card" styleName="borderShit" style={{"width":"50rem"}}>
                <div className="card-header py-1" styleName="orangeCardHead">
                    <div className="row">
                        <div className="col py-2 text-left">
                            <h5 className="mx-auto">Broken Squat Rack</h5>
                        </div>
                        <div className="col mt-2 text-right">
                            <p>4 mins ago</p>
                        </div>
                    </div>

                </div>

                <div className="card-body">
                    <p>Hey FitBuds! The squat rack in the far back right of the gym is broken and I have
                        notified the staff. It should be replaced within the next week. For now, we can use the other 2
                        squat racks. Keep up the gains everyone! #FitBuddies 💪</p>
                    <p className="text-right"> - John Smith</p>
                    <button type="button" className="btn btn-primary btn-sm mr-3" styleName="bottomBtn grow">Like</button>
                    <button type="button" className="btn btn-secondary btn-sm" styleName="bottomBtn grow">Comment</button>
                </div>

            </div>
            <br></br>            
            <br></br>
            <div className="card" styleName="borderShit" style={{"width":"50rem"}}>
                <div className="card-header py-1" styleName="orangeCardHead">
                    <div className="row">
                        <div className="col py-2 text-left">
                            <h5 className="mx-auto">New Years Resolution</h5>
                        </div>
                        <div className="col mt-2 text-right">
                            <p>5 days ago</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p>Hi everyone! Just wanted to say that I'm proud of you all for following up with your New Year's resolutions 📅 and truly shaping your future (literally). LOL! </p>
                    <p className="text-right"> - Mariah Brown</p>
                    <button type="button" className="btn btn-primary btn-sm mr-3" styleName="bottomBtn grow">Like</button>
                    <button type="button" className="btn btn-secondary btn-sm" styleName="bottomBtn grow">Comment</button>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="card" styleName="borderShit" style={{"width":"50rem"}}>
                <div className="card-header py-1" styleName="orangeCardHead">
                    <div className="row">
                        <div className="col py-2 text-left">
                            <h5 className="mx-auto">Looking for friends!</h5>
                        </div>
                        <div className="col mt-2 text-right">
                            <p>1 week ago</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p>Yo! Calvin here, I'm excited to lift with you all. If you see me working out, come by and say hi! I'm looking for a couple friends to gym with around 3 times a week. #BikiniBottom 🍑🍑🍑</p>
                    <p className="text-right"> - Calvin Yap</p>
                    <button type="button" className="btn btn-primary btn-sm mr-3" styleName="bottomBtn grow">Like</button>
                    <button type="button" className="btn btn-secondary btn-sm" styleName="bottomBtn grow">Comment</button>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="card" styleName="borderShit" style={{"width":"50rem"}}>
                <div className="card-header py-1" styleName="orangeCardHead">
                    <div className="row">
                        <div className="col py-2 text-left">
                            <h5 className="mx-auto">Made 2 friends today!</h5>
                        </div>
                        <div className="col mt-2 text-right">
                            <p>2 weeks ago</p>
                        </div>
                    </div>

                </div>

                <div className="card-body">
                    <p>Who would have known that other people do CrossFit? Today, I found 2 new friends 👨‍👨‍👦 that enjoy the intensity and positivity that CrossFit brings as much as me! Thanks #FitBud</p>
                    <p className="text-right"> - Alan Wualker</p>
                    <button type="button" className="btn btn-primary btn-sm mr-3" styleName="bottomBtn grow">Like</button>
                    <button type="button" className="btn btn-secondary btn-sm" styleName="bottomBtn grow">Comment</button>
                </div>

            </div>
            <br></br>
            </div>

        )
    }
};


export default CSSModules(FeedPost, styles, {allowMultiple: true});