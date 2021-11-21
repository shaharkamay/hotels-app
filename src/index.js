import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import kebabCase from './helpers/kebab-case';
import hotelsData from './static/hotels';
import HotelPage from './core/components/HotelPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<App />} />

        {/* Hotels Routes */}
        {hotelsData.map((hotelObj) => {
          return <Route path={`/hotel/${encodeURI(kebabCase(hotelObj.name))}`} element={<HotelPage hotel={hotelObj} />}  />
        })}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
