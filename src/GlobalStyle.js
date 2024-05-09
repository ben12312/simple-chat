import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  body,
  #root {
    height: 100%;  
  }
  
  body {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;