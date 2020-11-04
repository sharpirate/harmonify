import styled from 'styled-components';
import theme from '../../styled/theme';
import searchIcon from '../../assets/svg/search.svg';

const StyledSearchField = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  /* bring on top of the results container */
  z-index: 1;
  position: relative;

  width: ${theme.search.width}px;
  height: ${theme.search.height}px;
  border-radius: ${theme.search.height * 0.5}px;
  border: none;
  outline: none;
  padding: 0 ${theme.search.height}px;

  color: #858585;
  font-family: ${theme.fonts.primary};
  font-size: 20px;
  font-weight: 300;
  text-align: center;

  transition: width 0.35s ease;
  :hover, :focus {
    width: ${theme.search.width * 1.3}px;
  }
`;

const SearchIcon = styled.img`
  /* bring on top of the field */
  z-index: 2;
  position: absolute;

  height: ${theme.search.height * 0.5}px;
  left: ${theme.search.height * 0.35}px;

  /* center vertically */
  top: 50%;
  transform: translateY(-50%);

  /* disable hover to fix jittering */
  pointer-events: none;
`;

function SearchField(props) {
  return (
    <StyledSearchField>
      <StyledInput
        type="text"
        placeholder="Search For An Artist"
        spellcheck="false"
        value={props.value}
        onChange={props.handleInput}
      />
      <SearchIcon src={searchIcon} />
    </StyledSearchField>
  );
}

export default SearchField;