import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

function Audio({ source, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    switch (isPlaying) {
      case true:
        audioRef.current.play();
        break;
      case false:
        audioRef.current.pause();
        break;
      default:
        break;
    }
  }, [isPlaying]);

  return (
    <audio onEnded={setIsPlaying.bind(this, false)} ref={audioRef} src={source} autoPlay></audio>
  );
}

function mapStateToProps(state) {
  return {
    isPlaying: state.isPlaying
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setIsPlaying: isPlaying => {
      dispatch({type: 'SET_IS_PLAYING', isPlaying});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio);