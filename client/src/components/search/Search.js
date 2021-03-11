import { useRef, useState } from 'react';
import styled from 'styled-components';
import Results from './Results';
import SearchField from './SearchField';
import debounce from '../../utils/debounce';
import theme from '../../styled/theme';

const SearchWrap = styled.div`
  overflow: hidden;
`;

function Search() {
  const [results, setResults] = useState([]);
  const [resultsVisible, setResultsVisible] = useState(false);
  const fieldRef = useRef();

  const handleInput = debounce((e) => {
    if (e.target.value) {
      fetch(`/api/search/${e.target.value}`)
        .then(res => res.json())
        .then(data => setResults(data))
        .catch(err => console.error('ERROR SEARCH FRONT-END'));
    }
  }, 300)

  function handleFocus() {
    setResultsVisible(true);
  }
  
  function handleBlur(e) {
    // catch the click on a result before hiding them
    setTimeout(setResultsVisible.bind(this, false), 150);
    fieldRef.current.value = '';
  }

  return (
    <SearchWrap>
      <SearchField
        ref={fieldRef}
        handleInput={handleInput}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
      <Results visible={resultsVisible} results={results} defaultImg={theme.images.artist} />
    </SearchWrap>
  );
}

export default Search;