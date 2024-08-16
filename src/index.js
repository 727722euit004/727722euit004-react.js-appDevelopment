import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { MyProvider } from './context/FoodContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyProvider>

  <BrowserRouter>
    <App/>
    <Toaster/>
  </BrowserRouter>
  </MyProvider>
);


