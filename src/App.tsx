import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import Index from './pages/Index';
import theme from './styles/theme';



const App: React.FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <Index />
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default App;
