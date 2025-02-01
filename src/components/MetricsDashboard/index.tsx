import React, { useState } from 'react';
import { Container } from '@mui/material';
import SearchBar from '../SearchBar';
import InsightsTable from '../InsightsTable';
import { fetchCrUXData } from '../../services/cruxApi';
import './styles.css';

const MetricsDashboard: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const handleSearch = async (url: string) => {
    setCurrentUrl(url);
    try {
      setLoading(true);
      const response = await fetchCrUXData(url);
      const metrics = response.record.metrics;
      setData(metrics);
    } catch (error) {
      console.error('Error:', error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <div className="hero-section">
        <h1 className="hero-title">Discover Your Website's Real-World Performance</h1>
        <p className="hero-description">
          Analyze how real users experience your website with Chrome UX Report data. 
          Get insights on loading, interactivity, and visual stability metrics to improve your user experience.
        </p>
      </div>
      <SearchBar onSearch={handleSearch} />
      {data && <InsightsTable data={data} loading={loading} url={currentUrl} />}
    </Container>
  );
};

export default MetricsDashboard;