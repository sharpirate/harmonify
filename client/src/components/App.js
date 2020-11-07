import React from 'react';
import GlobalStyle from '../styled/GlobalStyle';
import Header from './Header';
import Selected from './Selected';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Selected />
    </React.Fragment>
  );
}

export default App;