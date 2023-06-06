import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Landing from './views/Landing/Landing.view';
import reportWebVitals from './reportWebVitals';
import { WeatherProvider } from './context/Weather.context';

const root = createRoot(document.getElementById('root'));
root.render(
  <WeatherProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  </WeatherProvider>
);

reportWebVitals();
