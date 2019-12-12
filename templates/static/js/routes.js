import React from 'react';
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom';
import Home from './components/Home';
import Basses from './components/Basses';

// import more components
export default (
  <HashRouter history={hashHistory}>
    <Route exact path='/' component={Home} />
    <Route path='/bass' component={Basses} />
  </HashRouter>
);