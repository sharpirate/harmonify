import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Results from './Results';
import SearchField from './SearchField';

const SearchWrap = styled.div``;

function Search() {
  const [fieldValue, setFieldValue] = useState('');
  const [results, setResults] = useState([]);

  function handleInput(e) {
    setFieldValue(e.target.value);
  }

  useEffect(() => {
    if (fieldValue) {
      fetch(`/api/search/${fieldValue}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setResults(data);
        });
    }
  }, [fieldValue]);

  return (
    <SearchWrap>
      <SearchField value={fieldValue} handleInput={handleInput}/>
      <Results results={results} />
    </SearchWrap>
  );
}

export default Search;