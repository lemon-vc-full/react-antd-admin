import axios from 'axios';
import { addCacheRequest, removeCacheRequest } from './cancel';

const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  addCacheRequest(config);
  return config;
});

request.interceptors.response.use(
  (response) => {
    removeCacheRequest(response.config);
    return response;
  },
  (error) => {
    removeCacheRequest(error.config);
    return Promise.reject(error);
  },
);
