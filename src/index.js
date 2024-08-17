import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
//const myqueryclient = new QueryClient() 
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <Provider store={store}>
  <App />
</Provider>,
);


reportWebVitals();
