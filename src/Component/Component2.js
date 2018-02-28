import React ,{Component} from 'react';
import logo from '../logo.svg'
import '../App_Signup.css';
import {Link} from 'react-router-dom';
import ToggleButton from 'react-toggle-button';


class Component2 extends Component{
  constructor(){
    super();
    this.state={
      value:false,
    }
  }
  render(){
    return(
      <div className="imgDiv_signup">
        <div>
          <img src = {logo} className = "logo_attrib_signup"/>
          <h1 className = "title_attrib_signup">TUTELAGE</h1>
        </div>


        <div className = "card_outer_box_signup">

          <div className = "card_attrib_signup">

            <div className = "card_attrib_1_signup">
              <h1 className = "card_attrib_1_heading_signup">Tutelage</h1>
              <h1 className = "card_attrib_1_1_heading_signup">Already have an Account?</h1><a href="/" className = "card_attrib_1_1_1_heading_signup">Sign In</a>
            </div> <br/><br/>

            <hr/>

          <div className = "card_attrib_2_signup">

            <div>
              <h1 className = "card_attrib_2_heading_signup">Create a Free Tutelage Account</h1>
            </div>

            <div className = "card_attrib_3_signup">
            <table className = "table_attrib_signup">
              <tr>
                <td><input type = "text" placeholder =   "Username" className = "input_text_signup"/></td>
              </tr>
              <tr><td><br/></td></tr>
              <tr>
                <td><input type = "text" placeholder = "Email Address" className = "input_text_signup"/></td>
              </tr>
              <tr><td><br/></td></tr>
              <tr>
                <td><input type = "password" placeholder =   "Password" className = "input_text_signup"/></td>
              </tr>
              <tr><td><br/></td></tr>
              <tr>
                <td><input type = "password" placeholder = "Confirm Password" className = "input_text_signup"/></td>
              </tr>
              <tr><td><br/></td></tr>
              <tr>
                <td><input type = "text" placeholder =   "Date of Birth (dd/mm/yyyy)" className = "input_text_signup"/></td>
              </tr>
            </table>
            </div>
            <div className = "toggle_attrib_signup">
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
          </div>
          <div>
            <a href="#" className = "signup_attrib_signup">SIGN UP</a>
          </div>

          </div>

          </div>

          <div className = "bottom_attrib_signup">
            <hr className = "line_style_signup"/>
            <p>Code Hawks<br/>Copyrights 2k18</p>
          </div>
      </div>
     );
  }
}
export default Component2;
