// import { useState, useEffect } from 'react';
// import axiosInstance from '../api/axiosInstance'; // Import the configured Axios instance

// const useApi = (url: string) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axiosInstance.get(url);
//         setData(response.data);
//         setLoading(false);
//       } catch (error:any) {
//         setError(error);
//         setLoading(false);
//       }
//     };
    
//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useApi;

//we can not call it onSubmit function
// import { useState, useEffect } from 'react';
// import axiosInstance from '../api/axiosInstance'; // Import the configured Axios instance

// const useApi = (url: string, method: string = 'GET', data: any = null, token: string | null = null) => {
//   const [responseData, setResponseData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const headers = token ? { Authorization: `Bearer ${token}` } : {};

//         const config = {
//           method,
//           url,
//           data,
//           headers,
//         };

//         const response = await axiosInstance(config);
//         setResponseData(response.data);
//         setLoading(false);
//       } catch (error: any) {
//         setError(error.message || 'An error occurred');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url, method, data, token]); // Dependencies: triggers effect when any of these change

//   return { data: responseData, loading, error };
// };

// export default useApi;


import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';
// import axiosInstance from '../api/axiosInstance';

// const useApi = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const callApi = async (url: string, method: string = 'GET', requestData: any = null, token: string | null = null) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const headers = token ? { Authorization: `Bearer ${token}` } : {};
//       const config = {
//         method,
//         url,
//         data: requestData,
//         headers,
//       };

//       const response = await axiosInstance(config);
//       setData(response.data);
//       setLoading(false);
//       return { data: response.data, error: null };
//     } catch (err: any) {
//       const errorMessage = err.message || 'An error occurred';
//       setError(errorMessage);
//       setLoading(false);
//       return { data: null, error: errorMessage };
//     }
//   };

//   return { data, loading, error, callApi };
// };

// export default useApi;


// In useApi.tsx
const useApi = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const callApi = async (
    url: string,
    method: string = 'GET',
    requestData: any = null,
    token: string | null = null
  ) => {
    setLoading(true);
    setError(null);

    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await axiosInstance({
        method,
        url,
        data: requestData,
        headers,
      });

      setData(response.data);
      return response.data;
    } catch (err: any) {
      console.log("Error check ", err.message);
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
      setError(errorMessage);
      return { data: null, error: errorMessage }; // Return both data and error
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, callApi };
};

export default useApi;  // This ensures useApi is a default export
