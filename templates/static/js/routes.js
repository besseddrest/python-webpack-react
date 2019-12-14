import React from 'react';
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Basses from './components/Basses';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

// import more components
export default (
  <Provider store={store}>
    <HashRouter history={hashHistory}>
      <Header heading="Vlance Armstrength" />
      <Route exact path='/' component={Home} />
      <Route path='/bass' component={Basses} />
    </HashRouter>
  </Provider>
);