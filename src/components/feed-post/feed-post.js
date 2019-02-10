import React, { Component } from 'react';
import styles from './feed-post.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';

class FeedPost extends Component {
    render() {
        return (

            <div className="col-md-8" styleName="tile">
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
            <br></br>
            </div>

        )
    }
};


export default CSSModules(FeedPost, styles, {allowMultiple: true});