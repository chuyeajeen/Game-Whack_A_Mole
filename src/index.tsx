import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/global-styles';
import Toast from './components/atomic/toast';
import {BrowserRouter} from "react-router-dom";

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <RecoilRoot>
      <BrowserRouter>
    <GlobalStyle />
    <App />
    <Toast />
      </BrowserRouter>
  </RecoilRoot>,
);
