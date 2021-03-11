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
      return {
        ...state,
        selectedArtist: action.item,
        isPlaying: false,
      };
    case 'SELECT_TRACK':
      let playingState;

      if (action.item.preview_url === null) {
        // if the track doesn't have a preview_url pause the playback
        playingState = false;
      } else if (action.item.id === state.selectedTrack.id) {
        // if you've selected the same track invert the playing state
        playingState = !state.isPlaying;
      } 
      else {
        // if the track has a preview_url and it's different from the previous track
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