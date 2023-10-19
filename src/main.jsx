import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import './main.css';
import Root from './components/Root';
import Home from './components/pages/Home';
import Characters from './components/pages/Characters';
import Ships from './components/pages/Ships';
import Species from './components/pages/Species';
import Planets from './components/pages/Planets';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="species" element={<Species />} />
        <Route path="ships" element={<Ships />} />
        <Route path="planets" element={<Planets />} />
      </Route>
    </>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
