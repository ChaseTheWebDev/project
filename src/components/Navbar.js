import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
    return (<div className="navbar-container">
        <div className='title-container'>
            <h1><Link to='/'>Utica</Link></h1>
        </div>
        <ul className="navbar-list">
            <li><Link to='/'>Work</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/our-team'>Our Team</Link></li>
            <li><Link to='/press'>Press</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </div>

    );
}