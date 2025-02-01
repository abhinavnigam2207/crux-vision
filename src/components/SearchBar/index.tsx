import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';

interface SearchBarProps {
  onSearch: (url: string) => void;
  existingUrls: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, existingUrls }) => {
  const [url, setUrl] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState<'warning' | 'error'>('warning');

  const isValidUrl = (urlString: string) => {
    try {
      const url = new URL(urlString);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    if (!isValidUrl(url)) {
      setToastMessage('Please enter a valid website URL (e.g., https://example.com)');
      setToastSeverity('error');
      setShowToast(true);
      return;
    }

    if (existingUrls.includes(url)) {
      setToastMessage('This URL has already been analyzed');
      setToastSeverity('warning');
      setShowToast(true);
      setUrl('');
      return;
    }

    onSearch(url);
    setUrl('');
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <TextField
          fullWidth
          variant="outlined"
          className="search-input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          autoFocus
          error={url !== '' && !isValidUrl(url)}
          helperText={url !== '' && !isValidUrl(url) ? 'Please enter a valid URL' : ''}
        />
        <Button 
          variant="contained" 
          className="search-button"
          type="submit"
        >
          <SearchIcon />
        </Button>
      </form>
      <Snackbar
        open={showToast}
        autoHideDuration={3000}
        onClose={() => setShowToast(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ top: '30px' }}
      >
        <Alert 
          severity={toastSeverity} 
          onClose={() => setShowToast(false)}
          sx={{ width: '100%' }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SearchBar;