import React, { Component } from 'react';
import '../App_Schedule_Teacher.css';
class Schedule_Teacher extends Component {

  render() {
    return (
          <div className="schedule">
          <div className="scrollTable">
          <div className = "dash_container">
            <section className="dash_row">
              <div className="dash_container">

              <table>
                <thead>
                  <tr>
                    <th scope="row" >
                      Monday
                    </th>

                    <td colspan="2" >
                      February 26th
                    </td>
                  </tr>
                </thead>

                <tbody>
                <tr>
                  <th scope="row">
                    <time datetime="09:00:00">9:00 AM</time>
                  </th>
                  <td colspan="2">
                    <h4>First Period</h4>
                      Subject to be taken during First Period Description

                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <time datetime="09:40:00">9:40 AM</time>
                  </th>
                <td>
                <h4>Second Period</h4>
                  Subject to be taken during Second Period Description
                </td>
               <td>
               <h4>Second Period Tests</h4>
                 Tests to be conducted during Second Period Description
               </td>
               </tr>
               <tr>
                <th scope="row">
                  <time datetime="10:30:00">10:30 PM</time>
                </th>
                <td className="schedule-offset" colspan="2">
                  Interval
                </td>
              </tr>
               <tr>
                 <th scope="row">
                   <time datetime="10:45:00">10:45 AM</time>
                 </th>
               <td>
               <h4>Third Period</h4>
                 Subject to be taken during Third Period Description
               </td>
              </tr>
              <tr>
                <th scope="row">
                  <time datetime="11:40:00">11:40 AM</time>
                </th>
              <td>
              <h4>Fourth Period</h4>
                Subject to be taken during Fourth Period Description
              </td>
             <td>
             <h4>Fourth Period Tests</h4>
               Tests to be conducted during Fourth Period Description
             </td>
             </tr>
               <tr>
                <th scope="row">
                  <time datetime="12:25:00">12:25 PM</time>
                </th>
                <td className="schedule-offset" colspan="2">
                  Lunch
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <time datetime="01:00">1:00 PM</time>
                </th>
                <td>
                <h4>Fifth Period Tests</h4>
                  Subject to be taken during Fifth Period Description
                </td>

              </tr>
              <tr>
                <th scope="row">
                  <time datetime="01:45:00">1:45 PM</time>
                </th>
                <td colspan="2">
                  <h4>Sixth Period</h4>
                    Subject to be taken during Sixth Period Description

                </td>
              </tr>
              <tr>
               <th scope="row">
                 <time datetime="02:45:00">2:45 PM</time>
               </th>
               <td className="schedule-offset" colspan="2">
                 Interval
               </td>
             </tr>
              <tr>
                <th scope="row">
                  <time datetime="03:00:00">3:00 PM</time>
                </th>
                <td colspan="2">
                  <h4>Seventh Period</h4>
                    Subject to be taken during Seventh Period Description

                </td>
              </tr>
              <tr>
                <th scope="row">
                  <time datetime="03:45:00">3:45 PM</time>
                </th>
                <td colspan="2">
                  <h4>Eighth Period</h4>
                    Subject to be taken during Eighth Period Description

                </td>
              </tr>
                </tbody>

<br/><br/><br/><br/>
                <thead>
                  <tr>
                    <th scope="row" >
                      Tuesday
                    </th>

                    <td colspan="2" >
                      February 27th
                    </td>
                  </tr>
                </thead>

                <tbody>
                <tr>
                  <th scope="row">
                    <time datetime="09:00:00">9:00 AM</time>
                  </th>
                  <td colspan="2">
                    <h4>First Period</h4>
                      Subject to be taken during First Period Description

                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <time datetime="09:40:00">9:40 AM</time>
                  </th>
                <td>
                <h4>Second Period</h4>
                  Subject to be taken during Second Period Description
                </td>
               <td>
               <h4>Second Period Tests</h4>
                 Tests to be conducted during Second Period Description
               </td>
               </tr>
               <tr>
                <th scope="row">
                  <time datetime="10:30:00">10:30 PM</time>
                </th>
                <td className="schedule-offset" colspan="2">
                  Interval
                </td>
              </tr>
               <tr>
                 <th scope="row">
                   <time datetime="10:45:00">10:45 AM</time>
                 </th>
               <td>
               <h4>Third Period</h4>
                 Subject to be taken during Third Period Description
               </td>
              </tr>
              <tr>
                <th scope="row">
                  <time datetime="11:40:00">11:40 AM</time>
                </th>
              <td>
              <h4>Fourth Period</h4>
                Subject to be taken during Fourth Period Description
              </td>
             <td>
             <h4>Fourth Period Tests</h4>
               Tests to be conducted during Fourth Period Description
             </td>
             </tr>
               <tr>
                <th scope="row">
                  <time datetime="12:25:00">12:25 PM</time>
                </th>
                <td className="schedule-offset" colspan="2">
                  Lunch
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <time datetime="01:00">1:00 PM</time>
                </th>
                <td>
                <h4>Fifth Period Tests</h4>
                  Subject to be taken during Fifth Period Description
                </td>

              </tr>
              <tr>
                <th scope="row">
                  <time datetime="01:45:00">1:45 PM</time>
                </th>
                <td colspan="2">
                  <h4>Sixth Period</h4>
                    Subject to be taken during Sixth Period Description

                </td>
              </tr>
              <tr>
               <th scope="row">
                 <time datetime="02:45:00">2:45 PM</time>
               </th>
               <td className="schedule-offset" colspan="2">
                 Interval
               </td>
             </tr>
              <tr>
                <th scope="row">
                  <time datetime="03:00:00">3:00 PM</time>
                </th>
                <td colspan="2">
                  <h4>Seventh Period</h4>
                    Subject to be taken during Seventh Period Description

                </td>
              </tr>
              <tr>
                <th scope="row">
                  <time datetime="03:45:00">3:45 PM</time>
                </th>
                <td colspan="2">
                  <h4>Eighth Period</h4>
                    Subject to be taken during Eighth Period Description

                </td>
              </tr>
                </tbody>
              </table>

              </div>
            </section>
          </div>
          </div>

          </div>
    );
  }
}

export default Schedule_Teacher;
