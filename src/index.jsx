import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NoteAppsWrapper from './components/NoteAppsWrapper';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NoteAppsWrapper />
  </BrowserRouter>,
);
