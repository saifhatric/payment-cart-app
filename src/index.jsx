import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Store } from './app/Store';
import { Provider } from 'react-redux';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);


