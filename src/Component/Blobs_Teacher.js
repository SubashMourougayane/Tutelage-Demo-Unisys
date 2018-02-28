import React, { Component } from 'react';
import '../App_Blobs_Teacher.css';
import upload from '../upload-to-cloud.png';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Blobs_Teacher_Upload from './Blobs_Teacher_Upload';

class Blobs_Teacher extends Component {

  render() {
    return (
          <div>

          <div>

          <div className = "card_view">

            <div>
              <p className = "heading_text"> Sample Text </p>
              <p className = "heading_description"> Sample Description </p>
            </div>

            <hr className = "line"/>

            <br/><br/>
            <p className = "description3"> No files uploaded yet. </p>




          </div>

          <Link to = "/blobs_teacher_upload"   className="fab"> + </Link>

          <div >
          </div>
          </div>

          </div>
    );
  }
}

export default Blobs_Teacher;
