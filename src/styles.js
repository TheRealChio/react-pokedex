import { createGlobalStyle } from "styled-components";
import PokeFont from "./fonts/PokeFont.ttf";
import Outfit from "./fonts/Outfit-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'PokeFont';
    src: url(${PokeFont}) format('truetype');
  }

  @font-face {
    font-family: 'Outfit';
    src: url(${Outfit}) format('truetype');
    font-weight: 100, 200, 300, 400, 500, 600, 700, 800, 900;
    font-display: swap; 
  }

:root {
}

* {
  margin: 0;
  padding: 0;
  font-family: "Outfit", sans-serif;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
}

main {
  display: grid;
  grid-template-columns: auto 30rem;
  gap: 1rem;
}
`;

export default GlobalStyle;
