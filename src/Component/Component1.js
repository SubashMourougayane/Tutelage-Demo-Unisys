import React ,{Component} from 'react';
import logo from '../logo.svg'
import '../App.css';
import {Link} from 'react-router-dom';
import ToggleButton from 'react-toggle-button';

class Component1 extends Component{
  constructor(){
    super();
    this.state={
      value:false,
    }
  }
  render(){
    return(
      <div className="imgDiv_signin">
        <div>
          <img src = {logo} className = "logo_attrib_login"/>
          <h1 className = "title_attrib_login">TUTELAGE</h1>
        </div>

        <div className = "main_text_attrib_login">
          <h3>Tutelage Portal</h3>
          <h1>Some Sample Text <br/>Hello World 123!</h1>
          <p>Encapsulation of all Education Services.</p>
        </div>

        <div className = "card_outer_box_login">

        <div className = "card_attrib_login">

          <div className = "card_attrib_1_login">
            <h1 className = "card_attrib_1_heading_login">Portal Login</h1>
          </div>



          <div className = "card_attrib_2_login">

            <table className = "table_attrib_login">
              <tr>
                <td className = "card_attrib_2_heading_login">Email Address</td>
              </tr>
              <tr>
                <td><input type = "text" placeholder =   "abc@example.com" className = "input_text_login"/></td>
              </tr>
              <tr><td><br/></td></tr>
              <tr>
                <td className = "card_attrib_2_heading_login">Password</td>
              </tr>
              <tr>
                <td><input type = "password" placeholder = "Max 32 Characters" className = "input_text_login"/></td>
              </tr>
              </table>

          </div>
          <br/><br/>
          <div className = "toggle_attrib_signin">
          <ToggleButton
            value={ this.state.value || false }
            inactiveLabel={"Student"}
            activeLabel={"Teacher"}
            colors={{
              activeThumb: {
                base: 'rgb(252,135,56)',
              },
              inactiveThumb: {
                base: 'rgb(252,135,56)',
              },
              active: {
                base: 'rgb(229,229,229)',
                hover: 'rgb(222, 222, 222)',
              },
              inactive: {
                base: 'rgb(229,229,229)',
                hover: 'rgb(222, 222, 222)',
              }
              }}
            onToggle={(value) => {
              this.setState({
                value: !value,
              })
            }}containerStyle={{display:"inline-block",width:"100px"}}
            trackStyle={{width:"100px",height :"20px"}}
            thumbStyle={{width:"30px",height:"30px"}}
            thumbAnimateRange={[-1,70]}
            activeLabelStyle={{width:"25px",color:"black",fontSize:"10px",fontFamily:"Josefin Sans",paddingTop:"1.5px"}}
            inactiveLabelStyle={{width:"25px",color:"black",fontSize:"10px", fontFamily:"Josefin Sans", paddingTop:"1.5px"}}
             />
            </div>
          <div>
            <a href="/home" className = "signin_attrib_login">SIGN IN</a>
          </div>

          <div className = "card_attrib_3_login">
            <h2 className = "card_attrib_3_text_login">New to Tutelage?&nbsp;</h2>
            <a href="/signup" className = "card_attrib_3_text_2_login">Register Here</a>
          </div>

          </div>
          <div>
            <h9 className = "detail_1_attrib_login">If you are a current Tutelage User, you can access your<br/>Account with your Email and Password.</h9>
          </div>

          </div>

          <div className = "bottom_attrib_login">
            <hr className = "line_style_login"/>
            <p>Code Hawks<br/>Copyrights 2k18</p>
          </div>


      </div>
    );
  }
}



export default Component1;
