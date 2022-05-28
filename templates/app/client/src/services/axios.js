import axios from 'axios';

const instance = axios.create({
  // baseURL: '/',
  baseURL: '/mock',
  headers: { 'x-requested-with': 'XMLHttpRequest' },
});

instance.interceptors.response.use(
  res => {
    let json = res.data;
    if (json.data && (json.data.code < 0 || json.data.error)) {
      res.data.code = -1;
      res.data.message = json.data.msg || json.data.message;
    }
    return res.data;
  },
  error => {},
);

export default instance;
