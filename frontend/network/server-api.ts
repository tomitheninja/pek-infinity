import axios from 'axios';
import { cookies } from 'next/headers';

import { AuthApi } from '@/pek';

const serverAxios = axios.create();
serverAxios.interceptors.request.use((config) => {
  const jwt = cookies().get('jwt');
  if (jwt) {
    config.headers.Authorization = `Bearer ${jwt.value}`;
  }
  return config;
});

export const serverUserApi = new AuthApi(undefined, 'http://localhost:3001', serverAxios);
