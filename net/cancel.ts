const cacheRequest = new Map();

const cacheWhiteList: string[] = [];

const generateKey = (config) => {
  const { method, url, params, data } = config;
  return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&');
};

export const addCacheRequest = (config) => {
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

export const removeCacheRequest = (config) => {
  const key = generateKey(config);
  cacheRequest.delete(key);
};

export const cancelAllRequest = () => {
  for (const value of cacheRequest.values()) {
    value('取消请求');
  }
  cacheRequest.clear();
};
