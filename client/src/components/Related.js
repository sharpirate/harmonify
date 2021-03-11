import { useState, useEffect } from 'react';
import Section from './Section';
import Collection from './Collection';
import { connect } from 'react-redux';
import theme from '../styled/theme';

function Related({ artistId }) {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (artistId) {
      fetch(`/api/related-artists/${artistId}`)
        .then(res => res.json())
        .then(data => setArtists(data))
        .catch(err => console.error(err.message));
    }
  }, [artistId]);

  return artists.length ? (
    <Section name="Related Artists">
      <Collection items={artists} type="artist" defaultImg={theme.images.artist}/>
    </Section>
  ) : null;
}

function mapStateToProps(state) {
  return {
    artistId: state.selectedArtist ? state.selectedArtist.id : null
  }
}

export default connect(mapStateToProps)(Related);