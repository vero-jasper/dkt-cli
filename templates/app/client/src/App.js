import React from 'react';
import PageIndex from './pages/Index';
import { Router, Route } from 'react-router';
import './App.less';

export default props => (
  <Router history={props.history}>
    <Route path="/" component={PageIndex} />
    <Route path="/it" component={PageIndex} />
  </Router>
);
