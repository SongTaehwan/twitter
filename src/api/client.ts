import axios, { AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';

const client = axios.create({
  baseURL: Config.API_HOST,
});

client.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${Config.BEARER_TOKEN}`;
  return config;
});

export default client;
