import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // 如果有 tailwind 或自訂 CSS

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
