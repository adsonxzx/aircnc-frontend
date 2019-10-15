import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Register from './pages/Login/index';
import Dashboard from './pages/Dashboard/index';
import New from './pages/New';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/new" component={New} />
    </Switch>
  </Router>
)