import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

  html {
    --pokemon-normal-color: #a4acaf;
    --pokemon-fighting-color: #d56723,
    --pokemon-flying-color: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%),
    --pokemon-poison-color: #b97fc9,
    --pokemon-ground-color: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%),
    --pokemon-rock-color: #a38c21,
    --pokemon-bug-color: #729f3f,
    --pokemon-ghost-color: #7b62a3,
    --pokemon-steel-color: #9eb7b8,    
    --pokemon-fire-color: #fd7d24,
    --pokemon-water-color: #4592c4,
    --pokemon-grass-color: #9bcc50,
    --pokemon-eltric-color: #eed535,
    --pokemon-psyhic-color: #f366b9,
    --pokemon-ice-color: #51c4e7,    
    --pokemon-dragon-color: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%),
    --pokemon-dark-color: #707070,
    --pokemon-fairy-color: #fdb9e9,
    --white-color: #E7E7E6;
    --red-color: #c00000;
    --yellow-color: #FAD61D;
    
  }
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