import trackImg from '../assets/svg/trackImg.svg';
import artistImg from '../assets/svg/artistImg.svg';

const theme = {
  breakpoints: {
    staticLogo: '(max-width: 1360px)',
    columnLayout: '(max-width: 1060px)',
  },

  images: {
    artist: artistImg,
    track: trackImg,
  },

  colors: {
    primary: 'rgba(14, 35, 31, 0.6)',
    primarySolid: 'rgb(14, 35, 31)',
    secondary: 'rgb(76, 108, 97)',
    light: '#fff',
  },

  fonts: {
    primary: 'Roboto, sans-serif',
    heading: 'Intro Black, sans-serif',
  },

  search: {
    width: 256, // px
    height: 48 // px
  },

  range: {
    width: 500, // px
    height: 2, // px
    scaleFactor: 1.3
  },

  record: {
    size: 160, // px
    bigSize: 160 * 1.2, // px
    gap: 1, // rem
    scaleFactor: 1.3,
  },

  radius: '25px',

};

export default theme;