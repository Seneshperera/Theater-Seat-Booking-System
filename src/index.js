import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SnackCartProvider } from './context/SnackCartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackCartProvider>
      <App />
    </SnackCartProvider>
  </React.StrictMode>
);
