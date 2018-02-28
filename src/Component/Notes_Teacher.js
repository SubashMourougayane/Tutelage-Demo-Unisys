import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

class Notes_Teacher extends Component {

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
        <p className = "description3"> No notes uploaded yet. </p>




      </div>

      <Link to = "/notes_teacher_upload" className="fab"> + </Link>

      <div >
      </div>
      </div>

      </div>
    );
  }
}

export default Notes_Teacher;
