import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import basses from './basses';

// TODO:
// - `react-router-redux` is deprecated, try implementing `connected-react-router`

const defaultState = {
  basses
};

const rootReducer = combineReducers({ basses, routing: routerReducer });

export default rootReducer;