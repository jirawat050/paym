import React, { Component } from 'react';
import { Switch, Route,Router }  from 'react-router-dom'
//import './App.css';
import './css/main.css';

import Login from './components/login.js';
import dashboard from './components/Dashboard/dashboard.js';

import owner from './components/Dashboard/owner/owner.js';
import addOwner from './components/Dashboard/owner/addOwner.js';
import detail from './components/Dashboard/owner/detail.js';
import editOwner from './components/Dashboard/owner/updateOwner.js';
import project from './components/Dashboard/project/project.js';
import projectAdd from './components/Dashboard/project/projectAdd.js'
import projectdetail from './components/Dashboard/project/detail.js';
import projectUpdate from './components/Dashboard/project/projectUpdate.js';
import buildingAdd from './components/Dashboard/building/Add.js'
import buildingdetail from './components/Dashboard/building/detail.js';
import buildingUpdate from './components/Dashboard/building/update.js';
import roomAdd from './components/Dashboard/room/Add.js'
import roomdetail from './components/Dashboard/room/detail.js';
import roomUpdate from './components/Dashboard/room/update.js';

class App extends Component {
  render() {
    return (

      <div className="App">
   
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={dashboard} />

      <Route exact path="/project" component={project} />
      <Route exact path="/project/add" component={projectAdd} />
      <Route exact path="/project/detail/:id" component={projectdetail}/>
      <Route exact path="/project/edit/:id" component={projectUpdate}/>

      <Route exact path="/building/add" component={buildingAdd} />
      <Route exact path="/building/detail/:id" component={buildingdetail}/>
      <Route exact path="/building/edit/:id" component={buildingUpdate}/>

      <Route exact path="/room/add" component={roomAdd} />
      <Route exact path="/room/detail/:id" component={roomdetail}/>
      <Route exact path="/room/edit/:id" component={roomUpdate}/>

      <Route exact path="/owner" component={owner} />
      <Route exact path="/owner/detail/:id" component={detail}/>
      <Route exact path="/owner/edit/:id" component={editOwner}/>
      <Route exact path="/owner/add" component={addOwner}/>
      
    </div>
   
    );
  }
}

// export default App;


export default App