import React, { Component } from 'react';
import { Route } from 'react-router-dom'
//import './App.css';
import './css/main.css';

import Login from './components/login.js';
import dashboard from './components/Dashboard/dashboard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={dashboard} />
    </div>
 
    );
  }
}

// export default App;


export default App