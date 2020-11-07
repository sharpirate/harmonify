const initialState = {
  selectedArtist: {}
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_ARTIST':
      console.log('action dispatched');
      console.log(action);
      break;
    default:
      return state;
  }
}

export default rootReducer;