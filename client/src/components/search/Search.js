import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Results from './Results';
import SearchField from './SearchField';
import debounce from '../../utils/debounce';

const SearchWrap = styled.div``;

function Search() {
  // const [fieldValue, setFieldValue] = useState('');
  const [results, setResults] = useState([]);
  const [resultsVisible, setResultsVisible] = useState(false);
  const fieldRef = useRef();

  const handleInput = debounce((e) => {
    fetch(`/api/search/${e.target.value}`)
        .then(res => res.json())
        .then(data => {
          console.log(e.target.value)
          console.log(data);
          setResults(data);
        });
  }, 300)

  function handleFocus() {
    setResultsVisible(true);
  }
  
  function handleBlur(e) {
    // catch the click on a result before hiding them
    setTimeout(setResultsVisible.bind(this, false), 150);
    // e.taget.value = '';
    fieldRef.current.value = '';
  }

  // useEffect(() => {
  //   if (fieldValue) {
  //     fetch(`/api/search/${fieldValue}`)
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(fieldValue)
  //         console.log(data);
  //         setResults(data);
  //       });
  //   }
  // }, [fieldValue]);

  return (
    <SearchWrap>
      <SearchField
        ref={fieldRef}
        handleInput={handleInput}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
      {resultsVisible ? <Results results={results} defaultImg="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" /> : null}
    </SearchWrap>
  );
}

export default Search;