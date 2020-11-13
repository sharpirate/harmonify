const initialState = {
  selectedTrack: {
    id: null,
  },
  isPlaying: false,
  selectedArtist: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_ARTIST':
      console.log('SELECT_ARTIST');
      return {
        ...state,
        selectedArtist: action.item,
        isPlaying: false,
      };
    case 'SELECT_TRACK':
      console.log('SELECT_TRACK');
      console.log('IS PLAYING: ', state.isPlaying);

      let playingState;

      // if you've selected the same track invert the playing state
      if (action.item.id === state.selectedTrack.id) {
        playingState = !state.isPlaying;
      } else {
        playingState = true;
      }
      
      return {
        ...state,
        selectedTrack: action.item,
        isPlaying: playingState,
      };
    case 'SET_IS_PLAYING':
      return {
        ...state,
        isPlaying: action.isPlaying,
      };
    default:
      return state;
  }
}

export default rootReducer;