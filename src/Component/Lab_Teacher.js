import React, { Component } from 'react';
import '../App_Lab_Teacher.css';
class Lab_Teacher extends Component {

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

        <ul className = "lab_heading">
          <li className = "lab_li">S.NO</li>
          <li className = "lab_li_line"></li>
          <li className = "lab_li">DATE</li>
          <li className = "lab_li_line"></li>
          <li className = "lab_li">CLASS</li>


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

export default Lab_Teacher;
