import Section from './Section';
import { connect } from 'react-redux';
import { selectedArtistTheme } from '../styled/recordTheme';
import Item from './Item';
import theme from '../styled/theme';
import chooseImage from '../utils/chooseImage';

function Selected({ artist }) {
  return artist ? (
    <Section name="Selected Artist">
      <Item item={artist} type="artist" img={chooseImage(artist.images, theme.images.artist)} theme={selectedArtistTheme} />
    </Section>
  ) : null;
}

function mapStateToProps(state) {
    return {
      artist: state.selectedArtist || null
    }
  }

export default connect(mapStateToProps)(Selected);