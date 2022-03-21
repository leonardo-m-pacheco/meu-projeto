import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Newproject from './components/pages/Newproject';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

<Routes>
  <Route exact path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route  path="/company" element={<Company />} />
    <Route path="/contact" element={<Contact />} />
    <Route  path="/newproject" element={<Newproject />} />
  </Route>
</Routes>

</BrowserRouter>
  
    </React.StrictMode>,
 
  document.getElementById('root')
);

