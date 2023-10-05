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
import Home from './components/Pages/Home';
import Characters from './components/Pages/Characters';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index={true} element={<Home />} />
        <Route path="characters" element={<Characters />} />
      </Route>
    </>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
