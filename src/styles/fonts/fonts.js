import { createGlobalStyle } from 'styled-components';
import NanumBarunGothic from './NanumBarunGothic.woff';

export default createGlobalStyle`
  @font-face {
    font-family: "NanumBarunGothic";
    src: local("NanumBarunGothic"),
    url(${NanumBarunGothic}) format('woff');
    font-style: normal;
  }
`;
