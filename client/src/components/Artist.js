import styled, { ThemeProvider } from 'styled-components';
import theme from '../styled/theme';
import { connect } from 'react-redux';

const StyledArtist = styled.li`
  ${props => props.theme.rootStyle};
`;

const ArtistImg = styled.div`
  ${props => props.theme.imgStyle};
`;

const ArtistName = styled.p`
  ${props => props.theme.nameStyle};
`;

function Artist({ artist, img, selectArtist, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledArtist onClick={() => selectArtist(artist)}>
        <ArtistImg img={img} />
        <ArtistName>{artist.name}</ArtistName>
      </StyledArtist>
    </ThemeProvider>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    selectArtist: artist => {
      dispatch({type: 'SELECT_ARTIST', artist});
    }
  }
}

export default connect(null, mapDispatchToProps)(Artist);