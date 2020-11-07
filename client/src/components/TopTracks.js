import { useState, useEffect } from 'react';
import Section from './Section';
import Records from './Records';
import Player from './player/Player';
import { connect } from 'react-redux';

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
      <Records records={tracks} defaultImg="https://vignette.wikia.nocookie.net/venturian-battle-headquarters/images/b/b1/Record_13.png/revision/latest?cb=20160730164224" />
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