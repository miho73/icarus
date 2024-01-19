import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.scss';
import MainFrame from "./elements/MainFrame";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainFrame />
  </React.StrictMode>
);
