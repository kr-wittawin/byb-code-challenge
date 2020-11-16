import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from './pages/signup/signup';
import Success from './pages/success/success';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/signup" exact component={SignUp} />
      <Route path="/success" exact component={Success} />
      <Redirect to="/signup" />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);