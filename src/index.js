import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Provider } from 'react-redux';
//const myqueryclient = new QueryClient() 
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(

    <App />



);


reportWebVitals();
