export interface InsightsTableProps {
  data: Array<{
    metrics: any;
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