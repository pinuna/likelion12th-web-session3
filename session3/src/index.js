import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login';
import Intro from './Intro';
import Counter from './Counter';

const router = createBrowserRouter([
 {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/intro",
    element: <Intro />,
  },
  {
    path: "/counter",
    element: <Counter />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
