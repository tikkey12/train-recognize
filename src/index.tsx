import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import WorkArea from "./WorkArea";
import Sandbox from "./Sandbox";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "./Navigation";
import './AppStyle.module.css'
import AddUser from "./AddUser";

ReactDOM.render(
  <React.StrictMode>
          <Navigation />
          <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/work" component={WorkArea} />
                <Route exact path="/sandbox" component={Sandbox} />
                <Route exact path="/addUser" component={AddUser} />
            </Switch>
          </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
