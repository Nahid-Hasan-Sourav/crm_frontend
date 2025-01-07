import axios from 'axios';

// Get the base URL from the environment variables
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API call
export const getDashboardData = () => api.get('/dashboard');

export default api;
