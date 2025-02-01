import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface ErrorToastProps {
  error: string | null;
  onClose: () => void;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ error, onClose }) => {
  return (
    <Snackbar 
      open={!!error} 
      autoHideDuration={6000} 
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{ top: '20px' }}
    >
      <Alert 
        onClose={onClose} 
        severity="error" 
        sx={{ width: '100%' }}
      >
        {error}
      </Alert>
    </Snackbar>
  );
};

export default ErrorToast;