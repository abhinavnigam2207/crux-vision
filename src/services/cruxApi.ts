interface CrUXMetrics {
  first_contentful_paint: any;
  largest_contentful_paint: any;
  first_input_delay: any;
}

export const fetchCrUXData = async (url: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_CRUX_API_KEY;
  const API_ENDPOINT = 'https://chromeuxreport.googleapis.com/v1/records:queryRecord';

  try {
    const response = await fetch(`${API_ENDPOINT}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        origin: url,
        formFactor: "ALL_FORM_FACTORS"
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch CrUX data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching CrUX data:', error);
    throw error;
  }
};