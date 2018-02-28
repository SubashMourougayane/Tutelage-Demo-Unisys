import React, { Component } from 'react';
import Component1 from './Component/Component1';
import Component2 from './Component/Component2';
import Home_Student from './Component/Home_Student';
import Home_Teacher from './Component/Home_Teacher';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
          <div>
            <Router>
              <div>
                <Switch>
                  <Route exact path = '/' component = {Component1} />
                  <Route exact path = '/signup' component = {Component2} />
                  <Route exact path = '/home' component = {Home_Teacher} />
                </Switch>
              </div>
            </Router>
          </div>
    );
  }
}

export default App;
