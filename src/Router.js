// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WorkView from './views/WorkView';
import AboutView from './views/AboutView';
import OurTeamView from './views/OurTeamView';
import PressView from './views/PressView';
import ContactView from './views/ContactView';
import './App.css';

export default function AppRouter() {
  return (
    <Router>
        <div className='App'>
        <Navbar />
      <Routes>
        <Route path="/" element={<WorkView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/our-team" element={<OurTeamView />} />
        <Route path="/press" element={<PressView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
      </div>
    </Router>
  );
}
