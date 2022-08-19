import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppProvider from './hooks';
import Index from './pages/Index';
import theme from './styles/theme';





const App: React.FC = () => (
  <Router>
    <AppProvider>
      <ThemeProvider theme={theme}>
          <Index />
        </ThemeProvider>
    </AppProvider>
    <GlobalStyle />
  </Router>
);

export default App;
