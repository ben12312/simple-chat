import axios from 'axios';
const instance = axios.create({ baseURL: `http://localhost:3000` });

instance.interceptors.request.use(
  function (config) {
    if (localStorage.getItem('accessToken')) {
        const accessToken = localStorage.getItem('accessToken');
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
