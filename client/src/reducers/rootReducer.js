const initialState = {};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_ARTIST':
      return {
        ...state,
        selectedArtist: action.artist,
      }
    default:
      return state;
  }
}

export default rootReducer;