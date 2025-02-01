import React from 'react';
import './styles.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">
            <img 
              src="/brightedge-logo.png" 
              alt="BrightEdge Logo" 
              className="logo-icon" 
            />
            <span className="logo-text">CrUX Vision</span>
          </div>
        </div>
        <div className="action-buttons">
          <button className="try-btn">Try CrUX Vision</button>
        </div>
      </div>
    </header>
  );
};

export default Header;