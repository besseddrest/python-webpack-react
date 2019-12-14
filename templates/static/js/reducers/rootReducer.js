import basses from '../data/basses';

const defaultState = {
  basses
};

const rootReducer = (state = defaultState, action) => {
  if (action.type = 'GET_BASSES') {
    return {
      basses: action.basses
    }
  }

  return state;
};

export default rootReducer;