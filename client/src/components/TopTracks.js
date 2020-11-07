import { useState, useEffect } from 'react';
import Section from './Section';
import Records from './Records';
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
      <Records records={tracks} />
    </Section>
  );
}

function mapStateToProps(state) {
  return {
    artistId: state.selectedArtist.id
  }
}

export default connect(mapStateToProps)(TopTracks);