import React ,{Component} from 'react';
import '../App_Home.css';
import logo from '../logo.svg'
import home from '../home.png'
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Schedule_Student from './Schedule_Student';
import Attendance_Student from './Attendance_Student';
import Blobs_Student from './Blobs_Student';
import Notes_Student from './Notes_Student';
import Test_Student from './Test_Student';
import Lab_Student from './Lab_Student';


class Home_Student extends Component
{
  render()
  {
    return(
      <div>
      <Router>
      <div>

      <div className = "nav_top_bar">
      <div>
        <img src = {logo} className = "logo_attrib_home"/>
        <h1 className = "title_attrib_home">TUTELAGE STUDENT</h1>
      </div>
      </div>
      <div>
      <nav className="main-menu">
            <ul>
                <li>
                    <Link to = "/Schedule_student" >
                      <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                            Schedule
                        </span>

                    </Link>

                </li>
                <li className="has-subnav">
                    <Link to = "/attendance_student" >
                        <i className="fa fa-table fa-2x"></i>
                        <span className="nav-text">
                            View Attendance
                        </span>
                    </Link>

                </li>
                <li className="has-subnav">
                    <Link to = "/blobs_student" >
                       <i className="fa fa-file fa-2x"></i>
                        <span className="nav-text">
                            Blobs Share
                        </span>
                    </Link>

                </li>
                <li className="has-subnav">
                    <Link to = "/notes_student" >
                       <i className="fa fa-camera fa-2x"></i>
                        <span className="nav-text">
                            Smart Notes
                        </span>
                    </Link>

                </li>
                <li className="has-subnav">
                    <Link to = "/test_student" >
                       <i className="fa fa-laptop fa-2x"></i>
                        <span className="nav-text">
                            Online Tests
                        </span>
                    </Link>

                </li>
                <li className="has-subnav">
                    <Link to = "/Lab_student" >
                       <i className="fa fa-terminal fa-2x"></i>
                        <span className="nav-text">
                            Lab
                        </span>
                    </Link>

                </li>
              </ul>

            <ul className="logout">
                <li>
                   <a href="#">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
        </div>

        <div  className = "work_area">

          <Switch>
            <Route path = "/Schedule_student" component = {Schedule_Student}/>
            <Route path = "/attendance_student" component = {Attendance_Student}/>
            <Route path = "/blobs_student" component = {Blobs_Student}/>
            <Route path = "/notes_student" component = {Notes_Student}/>
            <Route path = "/Lab_student" component = {Lab_Student}/>
            <Route path = '/test_student' component = {Test_Student} />
          </Switch>

        </div>
        </div>

        </Router>
        </div>
    );
  }
}
export default Home_Student;
