import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './App.css';

const isDev = process.env.NODE_ENV === 'development';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  isDev ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  ),
);
