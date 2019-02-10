import React, { Component } from 'react';
import styles from './messenger-3.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';

class Messenger3 extends Component {
    render() {
        return (
            <div className="col-md-8" styleName="tile">
            <div styleName="title">
                <h2>Sal Murphy</h2>
            </div>
                <div styleName="mesgs">
          <div styleName="msg_history">
            <div styleName="incoming_msg">
              <div styleName="incoming_msg_img"> <img styleName="pic" src={require('../../../assets/pp3.jpg')} alt="sunil"/> </div>
              <div styleName="received_msg">
                <div styleName="received_withd_msg">
                  <p>Hi! My name is Sal. I just moved here.</p>
                  <span styleName="time_date"> 11:01 AM    |    June 9</span></div>
              </div>
            </div>
            <div styleName="outgoing_msg">
              <div styleName="sent_msg">
                <p>And?</p>
                <span styleName="time_date"> 11:01 AM    |    June 9</span> </div>
            </div>
            <div styleName="incoming_msg">
              <div styleName="incoming_msg_img"> <img styleName="pic" src={require('../../../assets/pp3.jpg')} alt="sunil"/> </div>
              <div styleName="received_msg">
                <div styleName="received_withd_msg">
                  <p>Can we be #FitBuddies?</p>
                  <span styleName="time_date"> 11:01 AM    |    Yesterday</span></div>
              </div>
            </div>
            <div styleName="outgoing_msg">
              <div styleName="sent_msg">
                <p>Ok...</p>
                <span styleName="time_date"> 11:01 AM    |    Today</span> </div>
            </div>
            <div styleName="incoming_msg">
              <div styleName="incoming_msg_img"> <img styleName="pic" src={require('../../../assets/pp3.jpg')} alt="sunil"/> </div>
              <div styleName="received_msg">
                <div styleName="received_withd_msg">
                  <p>😎😁</p>
                  <span styleName="time_date"> 11:01 AM    |    Today</span></div>
              </div>
            </div>
          </div>
          <div styleName="type_msg">
            <div styleName="input_msg_write">
              <input type="text" styleName="write_msg" placeholder="Type a message" />
              <button styleName="msg_send_btn" type="button">Go</button>
            </div>
          </div>
        </div>
            </div>      
        )
    }
};


export default CSSModules(Messenger3, styles, {allowMultiple: true});