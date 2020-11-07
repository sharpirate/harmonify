import React from 'react';
import GlobalStyle from '../styled/GlobalStyle';
import Header from './Header';
import Selected from './Selected';
import TopTracks from './TopTracks';
import Related from './Related';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Selected />
      {/* <TopTracks /> */}
      <Related />
    </React.Fragment>
  );
}

export default App;