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

html, body {
  width: 100%;
  min-height: 100vh;
  height: 100%;
}

body {
  font-family: "NanumBarunGothic";
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

html, body {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

a {
  text-decoration: none;
}
`;
export default GlobalStyle;
