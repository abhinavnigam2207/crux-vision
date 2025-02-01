import React from 'react';
import './styles.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className='dummy-content'></div>
      <div className="footer-content">
        <div className="copyright">
          © {currentYear} BrightEdge. All rights reserved.
        </div>
        <div className="footer-links">
          <span className="separator">|</span>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="/terms" className="footer-link">Terms of Service</a>
        </div>
      </div>
      <div className="created-by">
        <span>Created By</span>
        <img src="/abhinavnigam2207.png" alt="Created by Abhinav Nigam" className="creator-image" />
      </div>
    </footer>
  );
};

export default Footer;