import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/global-styles';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>,
);
