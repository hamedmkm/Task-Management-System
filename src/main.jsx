import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../src/Store/Store'; 
import App from '../src/App/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // ایجاد root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
