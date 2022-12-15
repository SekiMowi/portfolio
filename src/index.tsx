import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Routes, Route,} from "react-router-dom";
import './index.module.scss'
import Navbar from './components/navbar/navbar';
import Projects from './components/sites/projects/projects';
import Cv from './components/sites/cv/cv';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Router>
  <Navbar/>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='cv' element={<Cv/>}/>
    </Routes>
  </Router>
</React.StrictMode>
);
reportWebVitals();
