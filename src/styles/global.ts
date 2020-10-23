import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  html, body {margin: 0; height: 100%; overflow: hidden};
  * {
    font-family: 'Press Start 2P', 'sans serif';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
  }

  body {
    background: #fcfcfc;
    color: #5F6368;
    -webkit-font-smoothing: antialiased;
    font-family: 'Press Start 2P', 'sans serif';
  }

  body, input, button {
    font-size: 14px; 
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;