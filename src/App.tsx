import React from 'react';
import GlobalStyle from './styles/global';
import Index from './pages/Index';
import Pokemon from './components/Pokemon';



const App: React.FC = () => (
  <>
    <Pokemon/>
    <GlobalStyle />
  </>
);

export default App;
