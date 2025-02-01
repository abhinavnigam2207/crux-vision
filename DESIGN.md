# Crux Vision - Technical Design Documentation

## Table of Contents
1. [Solution Architecture](#solution-architecture)
2. [Application Structure](#application-structure)
3. [Technical Choices](#technical-choices)
4. [Low Level Design](#low-level-design)

## Solution Architecture
The Crux Vision application follows a modern client-side architecture leveraging Next.js and Server Components. The application is structured as follows:

- **Frontend Layer**: Next.js application handling UI rendering and user interactions
- **API Service Layer**: Service Layer for making API requests to Google Cloud Vision API

## Application Structure

### Component Breakdown
- **Layout Components**
  - Root Layout (app/layout.tsx)
  
- **Feature Components**
  - Metrics Dashboard
  - Hero Section
  - Search Bar
  - Insights Table 
  - Error Toast
  - Header
  - Footer
  - Loading Spinner

### Data Flow
1. User seach a website's URL
2. API request sent to Google Cloud Vision
3. Response processed and formatted
4. Results displayed to user

## Technical Choices

### Frontend
- **Next.js 13+**
  - App Router for improved routing and layouts
  - Server Components for better performance
  - Image optimization out of the box

- **TypeScript**
  - Type safety and better developer experience
  - Better IDE support and code completion

- **Styling Solution**
  - Tailwind CSS for utility-first styling

### API Integration
- **API Design**
  - RESTful endpoints for image analysis

## Low Level Design

### Component Design
```typescript
// Image Analysis Flow
interface SearchBarProps {
  onSearch: (url: string) => void;
  existingUrls: string[];
  isLoading?: boolean;
}
-----------------------------------------
interface SearchBarState {
  url: string;
  error: string | null;
}
-----------------------------------------
interface InsightsTableProps {
  data: MetricsData[];
  loading: boolean;
  onDelete?: (url: string) => void;
}

-----------------------------------------
interface MetricsData {
  url: string;
  timestamp: number;
  metrics: {
    first_contentful_paint: MetricValue;
    largest_contentful_paint: MetricValue;
    first_input_delay: MetricValue;
    cumulative_layout_shift: MetricValue;
  };
}
-----------------------------------------