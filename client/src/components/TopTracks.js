import { useState, useEffect } from 'react';
import Section from './Section';
import Audio from './Audio';
import { connect } from 'react-redux';
import Collection from './Collection';
import theme from '../styled/theme';

function TopTracks({ artistId, trackId }) {
  const [tracks, setTracks] = useState([]);
  const [playSrc, setPlaySrc] = useState(null);

  useEffect(() => {
    if (trackId) {
      setPlaySrc(tracks.find(cur => cur.id === trackId).preview_url);
    }
  }, [trackId]);

  useEffect(() => {
    if (artistId) {
      fetch(`/api/top-tracks/${artistId}`)
        .then(res => res.json())
        .then(data => setTracks(data))
        .catch(err => console.error(err.message)); 
    } 
  }, [artistId]);

  return tracks.length ? (
    <Section name="Top Tracks">
      <Collection items={tracks} trackId={trackId} type="track" defaultImg={theme.images.track} />
      <Audio source={playSrc} />
    </Section>
  ) : null;
}

function mapStateToProps(state) {
  return {
    artistId: state.selectedArtist ? state.selectedArtist.id : null,
    trackId: state.selectedTrack ? state.selectedTrack.id : null,
    isPlaying: state.isPlaying,
  }
}

export default connect(mapStateToProps)(TopTracks);