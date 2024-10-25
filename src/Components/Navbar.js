// Navbar.js
import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">AAJ TAK</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/science">Science</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sports">Sports</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technology">Technology</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/business">Business</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/health">Health</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
            </li>
          </ul>
          <div className="ms-auto">
            <button type="button" className="btn btn-light me-2" onClick={() => toggleTheme('light')}>Light</button>
            <button type="button" className="btn btn-dark" onClick={() => toggleTheme('dark')}>Dark</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
