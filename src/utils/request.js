import axios from 'axios';

const request = axios.create({
  timeout: 10000,
});

request.interceptors.request.use(
  (config) => {
    // set content-type
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    // return format is { code, data, success }
    const { data } = response;
    if ([undefined, null, ''].includes(data)) {
      return {
        code: 500,
        success: false,
        data: null,
      };
    }
    if (typeof data === 'string') {
      return {
        code: 200,
        success: true,
        data,
      };
    }
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
