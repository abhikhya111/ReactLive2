import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Homepage from './components/Homepage';
import Header from './Header';
import Installation from './components/Installation';
import NewReactApp from './components/NewReactApp';
import AddComponents from './components/AddComponents';
import Stylesheets from './components/Stylesheets';
import Alerts from './components/Alerts';
import Breadcrumbs from './components/Breadcrumbs';
import Buttons from './components/Buttons';
import Carousal from './components/Carousal';
import Cards from './components/Cards';
import Dropdowns from './components/Dropdowns';

export default function App() {
 
  return (<>
    <div className='app'>
    <Header/>

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='https://euphonious-sherbet-7857ce.netlify.app/' element={<Installation/>}/>
          <Route path="/createApp" element={<NewReactApp/>}/>
          <Route path="/components" element={<AddComponents/>}/>
          <Route path="/stylesheets" element={<Stylesheets/>}/>
          <Route path="/components/alerts" element={<Alerts/>}/>
          <Route path="/components/breadcrumbs" element={<Breadcrumbs/>}/>
          <Route path="/components/buttons" element={<Buttons/>}/>
          <Route path="/components/cards" element={<Cards/>}/>
          <Route path="/components/carousals" element={<Carousal/>}/>
          <Route path="/components/dropdowns" element={<Dropdowns/>}/>

        </Routes>
      </Router>
    </div>
  </>
  );
}



