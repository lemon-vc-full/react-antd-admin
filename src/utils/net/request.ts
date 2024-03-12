import axios from 'axios';

export const request = axios.create({
  baseURL: '/',
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  config.supportCancel && addCacheRequest(config);
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

const cacheRequest = new Map();

const cacheWhiteList: string[] = [];

const generateKey = (config: any) => {
  const { method, url, params, data } = config;
  return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&');
};

export const addCacheRequest = (config: any) => {
  if (cacheWhiteList.includes(config.url)) return;
  const key = generateKey(config);
  if (cacheRequest.has(key)) {
    const cancel = cacheRequest.get(key);
    cancel('取消请求');
  }
  if (config.cancel) {
    const controller = new AbortController();
    config.signal = controller.signal;
    cacheRequest.set(key, controller);
  }
};

export const removeCacheRequest = (config: any) => {
  const key = generateKey(config);
  cacheRequest.delete(key);
};

export const cancelAllRequest = () => {
  for (const value of cacheRequest.values()) {
    value('取消请求');
  }
  cacheRequest.clear();
};

