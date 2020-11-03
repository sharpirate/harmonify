import React from 'react';
import GlobalStyle from '../styled/GlobalStyle';
import Header from './Header';
import Section from './Section';
import Records from './Records';
import Record from './Record';
import Logo from './Logo';
import Search from './search/Search';
import Player from './player/Player';

function App() {
  const records = [
    {
      img: 'https://www.btklsby.go.id/images/placeholder/camera.jpg',
      name: 'Aerosmith',
      id: 0
    },
    {
      img: 'https://www.btklsby.go.id/images/placeholder/camera.jpg',
      name: 'Guns N Roses',
      id: 1
    },
    {
      img: 'https://www.btklsby.go.id/images/placeholder/camera.jpg',
      name: 'Tom Petty',
      id: 2
    },
    {
      img: 'https://www.btklsby.go.id/images/placeholder/camera.jpg',
      name: 'Aerosmith',
      id: 3
    },
    {
      img: 'https://www.btklsby.go.id/images/placeholder/camera.jpg',
      name: 'Whitesnake',
      id: 4
    },
  ];

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header>
        <Logo />
        <Search />
      </Header>
      <Section type="main" name="Selected Artist">
        <Record img="https://www.btklsby.go.id/images/placeholder/camera.jpg" name="Tom Petty" selected />
      </Section>
      <Section name="Top Tracks">
        <Records records={records} />
        <Player title="Aerosmith - Amaizing"></Player>
      </Section>
      <Section name="Related Artists">
        <Records records={records} />
      </Section>
    </React.Fragment>
  );
}

export default App;