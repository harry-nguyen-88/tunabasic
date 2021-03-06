import axios from 'axios';

const AxiosClient = axios.create({
  baseURL: "http://localhost:4000",
  /* other custom settings */
});

AxiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('Start Request', config)
  return config;
}, function (error) {
  // Do something with request error
  console.log('Request ERROR', JSON.stringify(error))
  return Promise.reject(error);
});

// Add a response interceptor
AxiosClient.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('Response Success:', response)
  return response;
}, function (error) {
  // Do something with response error
  console.log('Response Error:', JSON.stringify(error.response.data))
  return Promise.reject(error);
});

export default AxiosClient;