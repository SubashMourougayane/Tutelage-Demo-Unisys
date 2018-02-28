import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import '../App_Test_Teacher.css';

class Test_Teacher extends Component {

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
        <p className = "description3"> No tests created yet. </p>

      </div>

      <Link to = "/test_teacher_upload" className="fab"> + </Link>

      <div >
      </div>
      </div>

      </div>
    );
  }
}

export default Test_Teacher;
