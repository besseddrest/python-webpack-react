import React from 'react';
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom';
import Home from './components/Home';
import Bass from './components/Bass';

// import more components
export default (
  <HashRouter history={hashHistory}>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/bass' component={Bass} />
    </div>
   </HashRouter>
);