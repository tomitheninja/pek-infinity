import axios from 'axios';
import Cookies from 'js-cookie';

import { DefaultApi } from '@/pek';
import { getBasePath } from '@/pek-api';

const clientAxios = axios.create();
clientAxios.interceptors.request.use((config) => {
  const jwt = Cookies.get('jwt');
  if (jwt) {
    config.headers.Authorization = `Bearer ${jwt}`;
  }
  return config;
});

export const clientUserApi = new DefaultApi(undefined, getBasePath(), clientAxios);
