'use client'

import React from 'react';
import Header from '../Header';
import MetricsDashboard from '../MetricsDashboard';

const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <MetricsDashboard />
    </>
  );
};

export default MainContent;