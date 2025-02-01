import React from 'react';
import { CircularProgress } from '@mui/material';
import './styles.css';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading...' 
}) => {
  return (
    <div className="loader-container">
      <CircularProgress size={60} thickness={4} />
      <p className="loading-text">{message}</p>
    </div>
  );
};

export default LoadingSpinner;