import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com',
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token = import.meta.env.VITE_GITHUB_API_KEY;
    if (token) {
      config.headers.Authorization = `token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;