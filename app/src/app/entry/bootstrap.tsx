import React from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource/roboto';
import './global.css';
import App from '../App';

const bootstrap = () => {
  createRoot(document.getElementById('react_root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

export default bootstrap;
