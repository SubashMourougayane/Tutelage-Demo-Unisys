import React ,{Component} from 'react';
import '../App_Home.css';
import logo from '../logo.svg'
import home from '../home.png'
import Schedule_Teacher from './Schedule_Teacher';
import Attendance_Teacher from './Attendance_Teacher';
import Blobs_Teacher from './Blobs_Teacher';
import Notes_Teacher from './Notes_Teacher';
import Test_Teacher from './Test_Teacher';
import Lab_Teacher from './Lab_Teacher';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Blobs_Teacher_Upload from './Blobs_Teacher_Upload';
import Notes_Teacher_Upload from './Notes_Teacher_Upload';
import Test_Teacher_Upload from './Test_Teacher_Upload';

class Home_Teacher extends Component
{
  state={
    header:'Schedule'
  }
  handlerSchedule=()=>{
    this.setState({
      header:"Schedule"
    })
  }

  handlerMan=()=>{
    this.setState({
      header:"Attendance Management"
    })
  }
  handlerShare=()=>{
    this.setState({
      header:"Blobs Share"
    })
  }
  handlerNote=()=>{
    this.setState({
      header:"Smart Notes"
    })
  }
  handlerTest=()=>{
    this.setState({
      header:"Online Test"
    })
  }
  handlerLab=()=>{
    this.setState({
      header:"Lab"
    })
  }
  render()
  {
    return(
      <div>
      <Router>
      <div>
      <div className = "nav_top_bar">
      <div>
        <img src = {logo} className = "logo_attrib_home"/>
        <h1 className = "title_attrib_home">{this.state.header}</h1>
      </div>
      </div>
      <div>
      <nav className="main-menu">
            <ul>
                <li>
                    <Link to = "/schedule_teacher" onClick={this.handlerSchedule} >
                      <i className="fa fa-list fa-2x"></i>
                        <span className="nav-text">
                            Schedule
                        </span>
                    </Link>

                </li>
                <li className="has-subnav">
                      <Link to = "/attendance_teacher"  onClick={this.handlerMan}>
                        <i className="fa fa-table fa-2x"></i>
                        <span className="nav-text">
                            Attendance Management
                        </span>
                    </Link>

                </li>
                <li className="has-subnav">
                    <Link to = "/blobs_teacher" onClick={this.handlerShare}>
                       <i className="fa fa-file fa-2x"></i>
                        <span className="nav-text">
                            Blobs Share
                        </span>
                    </Link>

                </li>
                <li className="has-subnav">
                    <Link to = "/notes_teacher" onClick={this.handlerNote}>
                       <i className="fa fa-camera fa-2x"></i>
                        <span className="nav-text">
                            Smart Notes
                        </span>
                    </Link>

                </li>
                <li className="has-subnav">
                    <Link to = "/test_teacher" onClick={this.handlerTest}>
                       <i className="fa fa-bookmark fa-2x"></i>
                        <span className="nav-text">
                            Online Test
                        </span>
                    </Link>

                </li>
                <li className="has-subnav">
                    <Link to = "/Lab_teacher" onClick={this.handlerLab}>
                       <i className="fa fa-laptop fa-2x"></i>
                        <span className="nav-text">
                            Lab Results
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
          <Route path = "/blobs_teacher_upload" component = {Blobs_Teacher_Upload} />
          <Route path = "/test_teacher_upload" component = {Test_Teacher_Upload} />
          <Route path = "/notes_teacher_upload" component = {Notes_Teacher_Upload} />
          <Route path = "/Schedule_teacher" exact component = {Schedule_Teacher}/>
          <Route path = "/attendance_teacher" exact component = {Attendance_Teacher}/>
          <Route path = "/blobs_teacher" exact  component = {Blobs_Teacher}/>
          <Route path = "/notes_teacher" exact component = {Notes_Teacher}/>
          <Route path = "/Lab_teacher" exact component = {Lab_Teacher}/>
          <Route path = '/test_teacher' exact component = {Test_Teacher} />
        </Switch>

        </div>
        </div>
        </Router>
        </div>

    );
  }
}
export default Home_Teacher;
