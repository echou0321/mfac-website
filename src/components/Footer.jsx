import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/husky-icon.png" alt="UW Husky" className="husky-icon" />
        <p>© {new Date().getFullYear()} Music for a Cause @ University of Washington</p>
        <p>
          Contact: <a href="mailto:musicforacause@uw.edu">musicforacause@uw.edu</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
