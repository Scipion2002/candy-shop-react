import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Candies from './components/Candies';
import Candy from './components/Candy';
import CreateCandy from './components/CreateCandy';
import EditCandy from './components/EditCandy';
import Error from './components/Error';
import Register from './components/Register';
import Nav from './components/Nav';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Nav/><App/></>,
    errorElement: <Error/>
  },
  {
    path: "/candies",
    element: <><Candies/></>,
    errorElement: <Error/>
  },
  {
    path: "/candy/:candyId",
    element: <><Candy/></>,
    errorElement: <Error/>
  },
  {
    path: "/createCandy",
    element: <><CreateCandy/></>,
    errorElement: <Error/>
  },
  {
    path: "/editCandy",
    element: <><EditCandy/></>,
    errorElement: <Error/>
  },
  {
    path: "/register",
    element: <><Register/></>,
    errorElement: <Error/>
  },
  {
    path: "/aboutUs",
    element: <div><h1>About Us</h1></div>,
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
