import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import ColorPalette from './colors';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    font-size: 14px;
    color: ${ColorPalette.GRAY_333};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin-bottom: 0;
  }
`;
