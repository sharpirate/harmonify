import Section from './Section';
import Record from './Record';
import { connect } from 'react-redux';
import { useEffect } from 'react';

function Selected({ artist }) {
  
  function chooseImage(images) {
    return images.length ? images[0].url : 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-image-default-avatar-photo-placeholder-profile-image-eps-file-easy-to-edit-124557892.jpg';
  }

  useEffect(() => {
    console.log('rerender');
  });

  return artist ? (
    <Section name="Selected Artist">
      <Record name={artist.name} img={chooseImage(artist.images)} selected />
    </Section>
  ) : null;
}

function mapStateToProps(state) {
    return {
      artist: state.selectedArtist || null
    }
  }

export default connect(mapStateToProps)(Selected);