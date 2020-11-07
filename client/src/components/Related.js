import { useState, useEffect } from 'react';
import Section from './Section';
import Records from './Records';
import { connect } from 'react-redux';

function Related({ artistId }) {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    console.log('use effect related')
    fetch(`/api/related-artists/${artistId}`)
      .then(res => res.json())
      .then(data => setArtists(data));
  }, [artistId]);

  return (
    <Section name="Related Artists">
      <Records records={artists} />
    </Section>
  );
}

function mapStateToProps(state) {
  return {
    artistId: state.selectedArtist.id
  }
}

export default connect(mapStateToProps)(Related);