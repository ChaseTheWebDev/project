import React from 'react';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import OurTeamView from './views/OurTeamView';
import PressView from './views/PressView';
import ContactView from './views/ContactView';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
