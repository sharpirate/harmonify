import { useState, useEffect } from 'react';
import Section from './Section';
// import Records from './Records';
import Collection from './Collection';
import { connect } from 'react-redux';

function Related({ artistId, selectArtist }) {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    console.log('use effect related')
    fetch(`/api/related-artists/${artistId}`)
      .then(res => res.json())
      .then(data => setArtists(data));
  }, [artistId]);

  return artists.length ? (
    <Section name="Related Artists">
      <Collection items={artists} type="artist" />
    </Section>
  ) : null;
}

function mapStateToProps(state) {
  return {
    artistId: state.selectedArtist ? state.selectedArtist.id : null
  }
}

export default connect(mapStateToProps)(Related);