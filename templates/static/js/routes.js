import React from 'react';
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Basses from './components/Basses';
import Bass from './components/Bass';

// import more components
export default (
  <HashRouter history={hashHistory}>
    <Route path='/' render={(props) => <Header {...props} heading="Vlance Armstrength" />} />
    <Route exact path='/' component={Home} />
    <Route path='/bass' component={Basses} />
  </HashRouter>
);