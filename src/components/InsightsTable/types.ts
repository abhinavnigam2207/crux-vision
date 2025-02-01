interface Percentiles {
  p75: number;
}

export interface Metric {
  percentiles?: Percentiles;
}

interface Metrics {
  first_contentful_paint?: Metric;
  largest_contentful_paint?: Metric;
  cumulative_layout_shift?: Metric;
  experimental_time_to_first_byte?: Metric;
}

export interface InsightsTableProps {
  data: Array<{
    metrics: Metrics;
    url: string;
    timestamp: number;
  }>;
  loading: boolean;
}

export interface Column {
  label: string;
  field: string;
  numeric?: boolean;
}