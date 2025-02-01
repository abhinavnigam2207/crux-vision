import React, { useState, useCallback } from 'react';
import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash/debounce';
import './styles.css';

interface SearchBarProps {
  onSearch: (url: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [url, setUrl] = useState('');

  const debouncedSetUrl = useCallback(
    debounce((value: string) => {
      setUrl(value);
    }, 300),
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      onSearch(url);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <TextField
          fullWidth
          variant="outlined"
          className="search-input"
          defaultValue={url}
          onChange={(e) => debouncedSetUrl(e.target.value)}
          placeholder="https://example.com"
          autoFocus
        />
        <Button 
          variant="contained" 
          className="search-button"
          type="submit"
        >
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;