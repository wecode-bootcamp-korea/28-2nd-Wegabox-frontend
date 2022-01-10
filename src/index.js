import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/fonts';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import mixin from './styles/Mixin';

ReactDOM.render(
  <>
    <GlobalStyle />
    <GlobalFonts />
    <ThemeProvider theme={{ ...theme, ...mixin }}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
