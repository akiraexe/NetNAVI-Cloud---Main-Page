import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// TypeScript may complain about side-effect CSS imports when no declaration exists.
// @ts-ignore: allow importing CSS for side effects
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);