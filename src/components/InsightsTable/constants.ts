import { Column } from './types';

export const COLUMNS: Column[] = [
  { label: 'URL', field: 'url' },
  { label: 'FCP (s)', field: 'fcp', numeric: true },
  { label: 'LCP (s)', field: 'lcp', numeric: true },
  { label: 'CLS', field: 'cls', numeric: true },
  { label: 'TTFB (s)', field: 'ttfb', numeric: true },
];