import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import AppProvider from './hooks';
import Index from './pages/Index';
import theme from './styles/theme';



const App: React.FC = () => (
  <>
    <AppProvider>
      <ThemeProvider theme={theme}>
          <Index />
          
        </ThemeProvider>
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
