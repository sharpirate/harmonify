import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import bg from '../assets/svg/nightSky.svg';
import IntroDemoWoff from '../assets/fonts/IntroDemo-BlackCAPS.woff';
import IntroDemoWoff2 from '../assets/fonts/IntroDemo-BlackCAPS.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Intro Demo';
    src:  url(${IntroDemoWoff2}) format('woff2'),
          url(${IntroDemoWoff}) format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: url(${bg}) fixed center center/cover;
    font-family: ${theme.fonts.primary};
    letter-spacing: 1px;
    position: relative;

    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;