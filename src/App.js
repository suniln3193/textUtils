import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Textarea from './components/Textarea';
import AboutUs from './components/AboutUs'; // Ensure this component exists
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <main style={{ marginTop: '90px' }}> {/* Adjust margin for fixed navbar */}
          <Routes>
            <Route path="/" element={<Textarea />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg border-body fixed-top"
      style={{ backgroundColor: '#4A148C', paddingTop: '15px', paddingBottom: '15px' }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: '#fff', fontSize: '25px' }}>
          TextUtils
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <Link
                className={`p-0 nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
                style={{ color: '#fff' }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                className={`p-0 nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}
                to="/about-us"
                style={{ color: '#fff' }}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;
