import { NavLink } from "react-router-dom";
import '../styles/MediaMenu.css';

export default function MediaMenu() {
    return (
        <div className="media-menu">
          <div className="media-menu-container">
            <div className='menu-nav-container'>
              <h1><NavLink to='/'>Utica</NavLink></h1>
              <div className="close-button">X</div>
            </div>
            <ul className="menu-list">
              <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Work</NavLink></li>
              <li><NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
              <li><NavLink to='/our-team' className={({ isActive }) => isActive ? 'active' : ''}>Our Team</NavLink></li>
              <li><NavLink to='/press' className={({ isActive }) => isActive ? 'active' : ''}>Press</NavLink></li>
              <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
            </ul>
          </div>
      </div>
      
    );
}