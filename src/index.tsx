import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import AboutMe from './components/aboutMe/aboutMe';
import Placeholder from './components/placeholder/placeholder';
import './index.module.scss'
import Navbar from './components/navbar/navbar';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='aboutMe' element={<AboutMe/>}/>
      <Route path='placeholder' element={<Placeholder/>}/>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);
reportWebVitals();
