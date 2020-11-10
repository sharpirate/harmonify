import styled, { css } from 'styled-components';
import theme from '../../styled/theme';
import chooseImage from '../../utils/chooseImage';
import Item from '../Item';
import resultTheme from '../../styled/resultTheme';

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

function Results({ results, defaultImg, fade }) {
  // hide results if empty
  return results.length ? (
    <ResultsWrap fade={fade}>
      <StyledResults>
        {results.map(result => {
          return <Item theme={resultTheme} type="artist" item={result} key={result.id} img={chooseImage(result.images, defaultImg)} />
        })}
      </StyledResults>
    </ResultsWrap>
  ) : null;
}

export default Results;