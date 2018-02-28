import React, { Component } from 'react';
import '../App_Attendance_Teacher.css';

class Attendance_Teacher extends Component {

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
        <ul className = "att_heading">
          <li className = "att_li">S.NO</li>
          <li className = "att_li_line"></li>
          <li className = "att_li">DATE</li>
          <li className = "att_li_line"></li>
          <li className = "att_li">CLASS</li>
          <li className = "att_li_line"></li>
          <li className = "att_li">HOUR</li>
          <li className = "att_li_line"></li>
          <li className = "att_li">PRESENT</li>
          <li className = "att_li_line"></li>
          <li className = "att_li">ABSENT</li>
        </ul>
        <hr className = "line"/>
        <br/>
        <br/>
        <p className = "description3"> No records logged yet. </p>




      </div>
      </div>

      </div>
    );
  }
}

export default Attendance_Teacher;
