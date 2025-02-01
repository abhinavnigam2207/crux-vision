import React from 'react';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './styles.css';

interface InsightsTableProps {
  data: any;
  loading: boolean;
  url?: string;
}

const InsightsTable: React.FC<InsightsTableProps> = ({ data, loading, url }) => {
  if (loading) {
    return <CircularProgress />;
  }

  const formatMetricValue = (metric: any) => {
    debugger
    if (!metric?.percentiles?.p75) return '-';
    const value = metric.percentiles.p75;
    return metric === data?.first_input_delay ? 
      `${value.toFixed(1)} ms` : 
      `${(value / 1000).toFixed(1)} s`;
  };

  return (
    <div className="table-container">
      <h2 className="table-title">Performance Metrics</h2>
      <TableContainer className="metrics-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>URL</TableCell>
              <TableCell>FCP (s)</TableCell>
              <TableCell>LCP (s)</TableCell>
              {/* <TableCell>CLS</TableCell> */}
              <TableCell>FID (ms)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{url || '-'}</TableCell>
              <TableCell>{formatMetricValue(data?.first_contentful_paint)}</TableCell>
              <TableCell>{formatMetricValue(data?.largest_contentful_paint)}</TableCell>
              {/* <TableCell>{data?.cumulative_layout_shift?.percentiles?.p75?.toFixed(3) || '-'}</TableCell> */}
              <TableCell>{formatMetricValue(data?.first_input_delay)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InsightsTable;