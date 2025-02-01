import React from 'react';
import './styles.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-icon">📊</span>
            <span className="logo-text">CrUX Vision</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#analytics">Analytics</a>
          <a href="#resources">Resources</a>
        </nav>
        <div className="action-buttons">
          <button className="login-btn">Log in</button>
          <button className="try-btn">Try CrUX Vision</button>
        </div>
      </div>
    </header>
  );
};

export default Header;