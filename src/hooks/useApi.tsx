import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error:any) {
        setError(error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useApi;