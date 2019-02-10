import React, { Component } from 'react';
import styles from './messenger-1.css';
import {Link} from 'react-router-dom'
import CSSModules from 'react-css-modules';

class Messenger1 extends Component {
    render() {
        return (
            <div className="col-md-8" styleName="tile">
            <div styleName="title">
                <h2>Lebron James</h2>
            </div>
                <div styleName="mesgs">
          <div styleName="msg_history">
            <div styleName="incoming_msg">
              <div styleName="incoming_msg_img"> <img styleName="pic" src={require('../../../assets/pp1.jpg')} alt="sunil"/> </div>
              <div styleName="received_msg">
                <div styleName="received_withd_msg">
                  <p>Hey, you coming to my game tonight kid?</p>
                  <span styleName="time_date"> 11:01 AM    |    June 9</span></div>
              </div>
            </div>
            <div styleName="outgoing_msg">
              <div styleName="sent_msg">
                <p>Nah Bron, I gotta workout today. You still gonna hit the chest before the game?</p>
                <span styleName="time_date"> 11:01 AM    |    June 9</span> </div>
            </div>
            <div styleName="incoming_msg">
              <div styleName="incoming_msg_img"> <img styleName="pic" src={require('../../../assets/pp1.jpg')} alt="sunil"/> </div>
              <div styleName="received_msg">
                <div styleName="received_withd_msg">
                  <p>Man! No silly games with your ass. It's almost the finals. #BRONOUT #THEKING</p>
                  <span styleName="time_date"> 11:01 AM    |    Yesterday</span></div>
              </div>
            </div>
            <div styleName="outgoing_msg">
              <div styleName="sent_msg">
                <p>I hate you...</p>
                <span styleName="time_date"> 11:01 AM    |    Today</span> </div>
            </div>
            <div styleName="incoming_msg">
              <div styleName="incoming_msg_img"> <img styleName="pic" src={require('../../../assets/pp1.jpg')} alt="sunil"/> </div>
              <div styleName="received_msg">
                <div styleName="received_withd_msg">
                  <p>😘😘😘</p>
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


export default CSSModules(Messenger1, styles, {allowMultiple: true});