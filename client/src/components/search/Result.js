import styled from 'styled-components';
import theme from '../../styled/theme';
import { connect } from 'react-redux';

const StyledResult = styled.li`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1.5rem;
  padding: 1rem;
  cursor: pointer;

  transition: transform 0.15s ease;
  :hover {
    background: ${theme.colors.primary};
    transform: scale(1.04);
  }
`;

const ResultImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const ResultName = styled.p`
  font-size: 1rem;
  color: ${theme.colors.light};
  /* name overflow */
  max-width: 220px;
  overflow-wrap: break-word;
`;

function Result({ artist, selectArtist }) {

  function chooseImage(images) {
    return images.length ? images[images.length - 1].url : 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-image-default-avatar-photo-placeholder-profile-image-eps-file-easy-to-edit-124557892.jpg';
  }

  return (
    <StyledResult onClick={() => selectArtist(artist)}>
      <ResultImg src={chooseImage(artist.images)} draggable="false" />
      <ResultName>{artist.name}</ResultName>
    </StyledResult>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    selectArtist: artist => {
      dispatch({type: 'SELECT_ARTIST', artist});
    }
  }
}

export default connect(null, mapDispatchToProps)(Result);