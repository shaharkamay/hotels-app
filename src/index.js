import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import kebabCase from './helpers/kebab-case';
import hotelsData from './static/hotels';
import HotelPage from './core/components/HotelPage';
import Header from './core/header/Header';
import ThemeContext from './Context/ThemeContext';


ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={localStorage.getItem('theme') || 'theme-auto'}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
