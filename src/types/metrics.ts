export interface MetricsData {
  metrics: any;
  url: string;
  timestamp: number;
}

export interface CrUXMetrics {
  // Replace 'any' with specific types
  metrics: Record<string, MetricData>;
}

export interface MetricData {
  histogram: Histogram[];
  percentiles: Percentiles;
}

export interface Histogram {
  start: number;
  end: number;
  density: number;
}

export interface Percentiles {
  p75: number;
  p95: number;
  p99: number;
}