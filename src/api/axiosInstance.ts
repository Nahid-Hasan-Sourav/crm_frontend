import axios from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your actual base URL
  timeout: 10000, // Request timeout (optional)
  headers: {
    'Content-Type': 'application/json', // Default content type
    Accept: 'application/json',        // Default accept header
  },
});

// Optional: Add a request interceptor to include tokens globally (if not provided directly in useApi)
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Retrieve token from storage if available
//     const token = localStorage.getItem('authToken');
//     if (token && !config.headers.Authorization) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error); // Handle request setup errors
//   }
// );

// // Optional: Add a response interceptor for global error handling
// axiosInstance.interceptors.response.use(
//   (response) => response, // Return successful responses
//   (error) => {
//     if (error.response?.status === 401) {
//       // Handle unauthorized errors globally
//       console.error('Unauthorized access. Redirecting to login...');
//     }
//     return Promise.reject(error); // Forward the error for local handling
//   }
// );

export default axiosInstance;
