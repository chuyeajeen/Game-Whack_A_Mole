import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gumi';
    src: url('/fonts/GumiRomance.ttf') format('truetype');
    font-weight: bold;
  }
  
  html, body {
    font-family: 'Gumi', sans-serif;
    height: 100vh;
    background-color: #357a14;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export default GlobalStyle;
