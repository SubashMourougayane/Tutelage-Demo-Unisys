import React, { Component } from 'react';
import '../App_Blobs_Teacher.css';
import upload from '../upload-to-cloud.png';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

class Blobs_Teacher extends Component {

  render() {
    return (
          <div>

          <div className = "card_view">

            <div>
              <p className = "heading_text"> Sample Text </p>
              <p className = "heading_description"> Sample Description </p>
            </div>

            <hr className = "line"/>

            <div>
              <div className = "img_div">
                <img src = {upload} className = "img_size"/>
              </div>

              <div>
                <p className = "description2"> Fast, Easy & Secure File Upload </p>
                <p className = "description3"> Click the button below to access your local files </p>
              </div>
            </div>

            <hr className = "line2" />

            <div>
              <a href="#" className = "upload_button">UPLOAD</a>
            </div>

          </div>

          </div>
    );
  }
}

export default Blobs_Teacher;
