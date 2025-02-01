'use client'

import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MetricsDashboard from '../MetricsDashboard';

const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <MetricsDashboard />
      <Footer />
    </>
  );
};

export default MainContent;