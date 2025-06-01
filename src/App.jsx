import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './components/Home';
import Performances from './components/Performances';
import Officers from './components/Officers';
import Donate from './components/Donate';
import ContactUs from './components/ContactUs';
import Events from './components/Events';
import JoinUs from './components/JoinUs';
import SocialMedia from './components/SocialMedia';

// Optional layout components (you can create these later)
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Optional top navigation */}
      <NavBar />

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/performances" element={<Performances />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/social" element={<SocialMedia />} />
      </Routes>

      {/* Optional footer */}
      <Footer />
    </Router>
  );
}

export default App;

