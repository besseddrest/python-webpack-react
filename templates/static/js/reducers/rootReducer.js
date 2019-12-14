import basses from '../data/basses';

const defaultState = {
  basses
};

// TODO:
// - create more reducers and use `combineReducers`

const rootReducer = (state = defaultState, action) => {
  if (action.type = 'GET_BASSES') {
    return {
      basses: action.basses
    }
  }

  return state;
};

export default rootReducer;