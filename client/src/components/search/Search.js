import styled from 'styled-components';
import Results from './Results';
import SearchField from './SearchField';

const SearchWrap = styled.div``;

function Search({ hideResults }) {
  return (
    <SearchWrap>
      <SearchField />
      <Results />
    </SearchWrap>
  );
}

export default Search;