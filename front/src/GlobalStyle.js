import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    font-family: 'Noto Sans KR', sans-serif;
    list-style: none;
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle