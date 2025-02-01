import React, { useState } from 'react';
import { Snackbar, Alert, CircularProgress } from '@mui/material';
import SearchBar from '../SearchBar';
import InsightsTable from '../InsightsTable';
import HeroSection from '../HeroSection';
import LoadingSpinner from '../LoadingSpinner';
import ErrorToast from '../ErrorToast';
import { fetchCrUXData } from '../../services/cruxApi';
import { MetricsData } from '../../types/metrics';
import './styles.css';

const MetricsDashboard: React.FC = () => {
  const [dataList, setDataList] = useState<MetricsData[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

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
        <HeroSection />
        <SearchBar 
          onSearch={handleSearch} 
          existingUrls={dataList.map(item => item.url)} 
        />
      </div>
      
      {loading ? (
        <LoadingSpinner message="Analyzing website metrics..." />
      ) : (
        dataList.length > 0 && (
          <InsightsTable 
            data={dataList} 
            loading={loading} 
          />
        )
      )}
      
      <ErrorToast 
        error={error}
        onClose={() => setError(null)}
      />
    </div>
  );
};

export default MetricsDashboard;