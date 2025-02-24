import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/global-styles';
import Toast from './components/atomic/toast';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
    <Toast />
  </RecoilRoot>,
);
