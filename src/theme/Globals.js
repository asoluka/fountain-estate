import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./theme-utils";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${primaryFont}
  }

  main {
    width: 90%;
    margin: 0 auto;
  }

  p {
    font-weight: 300;
    line-height: 1.6rem;
  }
`;
