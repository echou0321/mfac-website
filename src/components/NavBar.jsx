import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/husky-icon.png" alt="Husky Logo" className="navbar-logo" />
        <span className="navbar-title">Music for a Cause</span>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/performances">Performances</Link>
        <Link to="/officers">Officers</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/events">Events</Link>
        <Link to="/join">Join Us</Link>
        <Link to="/social">Social Media</Link>
      </div>
    </nav>
  );
}

export default NavBar;


