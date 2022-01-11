import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

ol,
ul {
  list-style: none;
}

button {
  background-color: transparent;
  outline: none;
  border: 0;
  &:hover {
    cursor: pointer;
  }
}

a {
  text-decoration: none;
}

body {
  font-family: "NanumBarunGothic";
}

`;
export default GlobalStyle;
