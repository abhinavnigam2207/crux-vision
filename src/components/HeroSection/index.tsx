import React from 'react';
import './styles.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <h1 className="hero-title">Discover Your Website&apos;s Real-World Performance</h1>
      <p className="hero-description">
        Analyze how real users experience your website with Chrome UX Report data. 
        Get insights on loading, interactivity, and visual stability metrics to improve your user experience.
      </p>
    </div>
  );
};

export default HeroSection;