import styled from 'styled-components';
import Result from './Result';
import theme from '../../styled/theme';

const ResultsWrap = styled.div`
  background: ${theme.colors.primary};
  border-radius: 0 0 ${theme.search.height * 0.5}px ${theme.search.height * 0.5}px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: ${theme.search.height * 0.5}px;
    background: inherit;

    position: absolute;
    transform: translateY(-100%);
    top: 0;
    left: 0;
  }
`;

const StyledResults = styled.ul`
  width: auto;
  display: inline-flex;
  flex-direction: column;
  padding: 1rem 0;
`;

function Results({ results }) {
  // const results = [
  //   {
  //     img: 'https://www.btklsby.go.id/images/placeholder/camera.jpg',
  //     name: 'Aerosmith',
  //     id: 0
  //   },
  //   {
  //     img: 'https://www.btklsby.go.id/images/placeholder/camera.jpg',
  //     name: 'Guns N Roses',
  //     id: 1
  //   },
  //   {
  //     img: 'https://www.btklsby.go.id/images/placeholder/camera.jpg',
  //     name: 'Whitesnake',
  //     id: 2
  //   },
  // ];
  return (
    <ResultsWrap>
      <StyledResults>
        {results.map(result => {
          const imgUrl = (result.images.length > 0) ? result.images[2].url : 'https://st2.depositphotos.com/4111759/12123/v/450/depositphotos_121233262-stock-illustration-male-default-placeholder-avatar-profile.jpg';

          return <Result img={imgUrl} name={result.name} key={result.id} />
        })}
      </StyledResults>
    </ResultsWrap>
  );
}

export default Results;