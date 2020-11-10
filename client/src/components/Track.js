import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { recordTheme } from '../styled/recordTheme';

const StyledTrack = styled.li`
  ${props => props.theme.rootStyle};
`;

const TrackImg = styled.div`
  ${props => props.theme.imgStyle};
`;

const TrackName = styled.p`
  ${props => props.theme.nameStyle};
`;

function Track({ track, img, theme, selectTrack }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledTrack onClick={() => selectTrack(track)}>
        <TrackImg img={img} />
        <TrackName>{track.name}</TrackName>
      </StyledTrack>
    </ThemeProvider>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    selectTrack: track => {
      dispatch({type: 'SELECT_TRACK', track});
    }
  }
}

export default connect(null, mapDispatchToProps)(Track);