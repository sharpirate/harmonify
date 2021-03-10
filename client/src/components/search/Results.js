import styled, { css } from 'styled-components';
import theme from '../../styled/theme';
import chooseImage from '../../utils/chooseImage';
import Item from '../Item';
import resultTheme from '../../styled/resultTheme';

const ResultsAnimWrap = styled.div`
  overflow: hidden;
  position: relative;
  top: -${theme.search.height * 0.5}px;
  padding-top: ${theme.search.height * 0.5}px;
`;

const ResultsWrap = styled.div`
  background: ${theme.colors.primary};
  border-radius: 0 0 ${theme.search.height * 0.5}px ${theme.search.height * 0.5}px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.4s ease;

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

function Results({ results, defaultImg, visible }) {
  // hide results if empty
  return results.length ? (
    <ResultsAnimWrap>
      <ResultsWrap visible={visible}>
        <StyledResults>
          {results.map(result => {
            return <Item theme={resultTheme} type="artist" item={result} key={result.id} img={chooseImage(result.images, defaultImg)} />
          })}
        </StyledResults>
      </ResultsWrap>
    </ResultsAnimWrap>
  ) : null;
}

export default Results;