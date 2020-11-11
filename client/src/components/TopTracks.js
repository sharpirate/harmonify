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
    if (!isPlaying) {
      console.log('inside here!');
      setPlaySrc(null);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (trackId) {
      console.log('SELECTED TRACK WITH ID: ' + trackId);
      console.log(tracks.find(cur => cur.id === trackId));
      setPlaySrc(tracks.find(cur => cur.id === trackId).preview_url);
    }
  }, [trackId]);

  useEffect(() => {
    console.log('use effect top tracks');
    fetch(`/api/top-tracks/${artistId}`)
      .then(res => res.json())
      .then(data => setTracks(data));
  }, [artistId]);

  return (
    <Section name="Top Tracks">
      <Collection items={tracks} trackId={trackId} type="track" defaultImg="https://cdn0.iconfinder.com/data/icons/internet-2020/1080/Applemusicandroid-512.png" />
      <Player source={playSrc} />
    </Section>
  );
}

function mapStateToProps(state) {
  return {
    artistId: state.selectedArtist.id,
    trackId: state.selectedTrack.id,
    isPlaying: state.isPlaying,
  }
}

export default connect(mapStateToProps)(TopTracks);