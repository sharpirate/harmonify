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

const ResultImg = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  /* border: 1px solid red; */
  margin-right: 1rem;
  background: url(${props => props.img}) no-repeat center center/cover;
`;

const ResultName = styled.p`
  font-size: 1rem;
  color: ${theme.colors.light};
  /* name overflow */
  max-width: 220px;
  overflow-wrap: break-word;
`;

function Result({ artist, img, selectArtist }) {
  return (
    <StyledResult onClick={() => selectArtist(artist)}>
      <ResultImg img={img} />
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