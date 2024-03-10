// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'; // Import HashRouter
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home/Home';
import Crew from './Pages/Crew/Crew';
import Technology from './Pages/Technology/Technology';
import Destination from './Pages/Destination/Destination';
import NotFoundPage from './Pages/NotFoundPage';
import data from './assets/shared/data.json';

const router = createHashRouter( // Use HashRouter
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='Destination' element={<Destination data={data.destinations} />} />
      <Route path='Crew' element={<Crew data={data.crew} />} />
      <Route path='Technology' element={<Technology data={data.technology} />} />
      <Route path='*' element={<NotFoundPage />} /> {/* Handle not-found scenario */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
