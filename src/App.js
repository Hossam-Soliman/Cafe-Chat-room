import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import Dashboard from './components/dashboard/Dashboard'
// import Chat from './components/layout/Chat'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import Welcome from './components/dashboard/Welcome'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path= '/' component= {Welcome} />
          <Route path= '/home' component= {Dashboard} />
          
          <Route path= '/project/:id' component ={ProjectDetails} />
          <Route path ='/signin' component={SignIn} />
          <Route path ='/signup' component={SignUp} />
          <Route path ='/create' component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
