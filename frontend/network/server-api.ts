import axios from 'axios';
import { cookies } from 'next/headers';

import { DefaultApi } from '@/pek';
import { getBasePath } from '@/pek-api';

const serverAxios = axios.create();
serverAxios.interceptors.request.use((config) => {
  const jwt = cookies().get('jwt');
  if (jwt) {
    config.headers.Authorization = `Bearer ${jwt.value}`;
  }
  return config;
});

export const serverUserApi = new DefaultApi(undefined, getBasePath(), serverAxios);
