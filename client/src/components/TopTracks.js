import { useState, useEffect } from 'react';
import Section from './Section';
import Records from './Records';
import Player from './player/Player';
import { connect } from 'react-redux';
import Collection from './Collection';

function TopTracks({ artistId }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    console.log('use effect top tracks')
    fetch(`/api/top-tracks/${artistId}`)
      .then(res => res.json())
      .then(data => setTracks(data));
  }, [artistId]);

  return (
    <Section name="Top Tracks">
      <Collection items={tracks} type="track" defaultImg="https://cdn0.iconfinder.com/data/icons/internet-2020/1080/Applemusicandroid-512.png" />
      <Player />
    </Section>
  );
}

function mapStateToProps(state) {
  return {
    artistId: state.selectedArtist.id
  }
}

export default connect(mapStateToProps)(TopTracks);