const initState = {
  selectedArtist: {
    name: 'Aerosmith',
    id: '1dksdpkasdal'
  },
  selectedTrack: {
    name: 'Crying',
    id: 'a1djd1wojoais'
  }
}

function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'SELECT_ARTIST':
      break;
    case 'SELECT_TRACK':
      break;
  }
}

export default rootReducer;