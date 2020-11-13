import { useState, useEffect } from 'react';
import Section from './Section';
import Records from './Records';
import Player from './player/Player';
import { connect } from 'react-redux';
import Collection from './Collection';
import { selectedTrackTheme } from '../styled/recordTheme';

function TopTracks({ artistId, trackId, isPlaying }) {
  const [tracks, setTracks] = useState([]);
  const [playSrc, setPlaySrc] = useState(null);

  useEffect(() => {
    if (trackId) {
      setPlaySrc(tracks.find(cur => cur.id === trackId).preview_url);
    }
  }, [trackId]);

  useEffect(() => {
    fetch(`/api/top-tracks/${artistId}`)
      .then(res => res.json())
      .then(data => setTracks(data)); 
  }, [artistId]);

  return tracks.length ? (
    <Section name="Top Tracks">
      <Collection items={tracks} trackId={trackId} type="track" defaultImg="https://cdn0.iconfinder.com/data/icons/internet-2020/1080/Applemusicandroid-512.png" />
      <Player source={playSrc} />
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