import React, { useState } from 'react';
import { 
  CircularProgress, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  TableSortLabel,
  TextField,
  Box
} from '@mui/material';
import { InsightsTableProps, Column } from './types';
import { COLUMNS } from './constants';
import './styles.css';

const InsightsTable: React.FC<InsightsTableProps> = ({ data, loading }) => {
  const [orderBy, setOrderBy] = useState<string>('url');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [filterValue, setFilterValue] = useState('');

  if (loading) {
    return <CircularProgress />;
  }

  const handleSort = (field: string) => {
    const isAsc = orderBy === field && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(field);
  };

  const formatMetricValue = (metric: any) => {
    if (!metric?.percentiles?.p75) return '-';
    const value = metric.percentiles.p75;
    return `${(value / 1000).toFixed(1)} s`;
  };

  const getRowsData = () => data.map(item => ({
    url: item.url || '-',
    fcp: formatMetricValue(item.metrics?.first_contentful_paint),
    lcp: formatMetricValue(item.metrics?.largest_contentful_paint),
    cls: item.metrics?.cumulative_layout_shift?.percentiles?.p75 || '-',
    ttfb: formatMetricValue(item.metrics?.experimental_time_to_first_byte),
    timestamp: item.timestamp,
  }));

  const rowsData = getRowsData();
  const filteredData = rowsData.filter(row => 
    Object.values(row).some(value => 
      value.toString().toLowerCase().includes(filterValue.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[orderBy as keyof typeof a];
    const bValue = b[orderBy as keyof typeof b];
    
    const numericColumns = ['fcp', 'lcp', 'cls', 'ttfb'];
    if (numericColumns.includes(orderBy)) {
      const aNum = parseFloat(aValue.toString().replace(/[^\d.-]/g, ''));
      const bNum = parseFloat(bValue.toString().replace(/[^\d.-]/g, ''));
      
      if (isNaN(aNum)) return order === 'asc' ? 1 : -1;
      if (isNaN(bNum)) return order === 'asc' ? -1 : 1;
      
      return order === 'asc' ? aNum - bNum : bNum - aNum;
    }
    
    const aStr = aValue.toString().toLowerCase();
    const bStr = bValue.toString().toLowerCase();
    
    if (order === 'asc') {
      return aStr.localeCompare(bStr);
    } else {
      return bStr.localeCompare(aStr);
    }
  });

  const calculateSummary = (data: any[]) => {
    const numericColumns = ['fcp', 'lcp', 'cls', 'ttfb'];
    return numericColumns.reduce((acc, column) => {
      const values = data
        .map(row => parseFloat(row[column].toString().replace(/[^\d.-]/g, '')))
        .filter(val => !isNaN(val));
      
      const avg = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
      acc[column as keyof typeof acc] = column === 'cls' ? avg.toFixed(3) : `${avg.toFixed(2)} s`;
      return acc;
    }, { url: 'Average' });
  };

  return (
    <div className="table-container">
      <h2 className="table-title">Performance Metrics</h2>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Filter by url"
          variant="outlined"
          size="small"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          fullWidth
        />
      </Box>
      <TableContainer className="metrics-table">
        <Table>
          <TableHead>
            <TableRow>
              {COLUMNS.map((column) => (
                <TableCell 
                  key={column.label}
                  sortDirection={orderBy === column.field ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === column.field}
                    direction={orderBy === column.field ? order : 'asc'}
                    onClick={() => handleSort(column.field)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.url}</TableCell>
                <TableCell>{row.fcp}</TableCell>
                <TableCell>{row.lcp}</TableCell>
                <TableCell>{row.cls}</TableCell>
                <TableCell>{row.ttfb}</TableCell>
              </TableRow>
            ))}
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              {Object.values(calculateSummary(sortedData)).map((value, index) => (
                <TableCell key={index} sx={{ fontWeight: 'bold' }}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InsightsTable;