import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import bg from '../assets/svg/nightSky.svg';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  body {
    background: url(${bg}) fixed center center/cover;
    font-family: ${theme.fonts.primary};
    letter-spacing: 1px;
    position: relative;
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;