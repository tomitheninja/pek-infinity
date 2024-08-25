import axios from 'axios';
import Cookies from 'js-cookie';

import { AuthApi } from '@/pek';

const clientAxios = axios.create();
clientAxios.interceptors.request.use((config) => {
  const jwt = Cookies.get('jwt');
  if (jwt) {
    config.headers.Authorization = `Bearer ${jwt}`;
  }
  return config;
});

export const clientUserApi = new AuthApi(undefined, 'http://localhost:3001', clientAxios);
