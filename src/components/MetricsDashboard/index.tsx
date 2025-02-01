import React, { useState } from 'react';
import { Snackbar, Alert, CircularProgress } from '@mui/material';
import SearchBar from '../SearchBar';
import InsightsTable from '../InsightsTable';
import { fetchCrUXData } from '../../services/cruxApi';
import './styles.css';

const MetricsDashboard: React.FC = () => {
  const [dataList, setDataList] = useState<Array<{
    metrics: any;
    url: string;
    timestamp: number;
  }>>([]);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleCloseError = () => {
    setError(null);
  };

  const handleSearch = async (url: string) => {
    setCurrentUrl(url);
    try {
      setLoading(true);
      const response = await fetchCrUXData(url);
      const metrics = response.record.metrics;
      setDataList(prevList => [...prevList, {
        metrics,
        url,
        timestamp: Date.now()
      }]);
      
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch website metrics. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className='bg-color'>
        <div className="hero-section">
          <h1 className="hero-title">Discover Your Website's Real-World Performance</h1>
          <p className="hero-description">
            Analyze how real users experience your website with Chrome UX Report data. 
            Get insights on loading, interactivity, and visual stability metrics to improve your user experience.
          </p>
        </div>
        <SearchBar 
          onSearch={handleSearch} 
          existingUrls={dataList.map(item => item.url)} 
        />
      </div>
      {loading ? (
        <div className="loader-container">
          <CircularProgress size={60} thickness={4} />
          <p className="loading-text">Analyzing website metrics...</p>
        </div>
      ) : (
        dataList.length > 0 && (
          <InsightsTable 
            data={dataList} 
            loading={loading} 
          />
        )
      )}
      <Snackbar 
        open={!!error} 
        autoHideDuration={6000} 
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ top: '20px' }}
      >
        <Alert 
          onClose={handleCloseError} 
          severity="error" 
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MetricsDashboard;