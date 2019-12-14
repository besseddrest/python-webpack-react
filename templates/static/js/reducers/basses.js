function basses(state = [], action) {
  if (action.type = 'GET_BASSES' && action.basses) {
    return action.basses;
  }

  return state;
}

export default basses;