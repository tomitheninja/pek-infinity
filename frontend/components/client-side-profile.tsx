'use client';

import { useEffect, useState } from 'react';

import { clientUserApi } from '@/network/client-api';
import { type UserDto } from '@/pek';

export function ClientSideProfile() {
  const [user, setUser] = useState<UserDto>();

  useEffect(() => {
    clientUserApi.authControllerMe().then((response) => {
      setUser(response.data);
    });
  }, []);

  if (!user) {
    return null;
  }

  return <h1>{user.name}</h1>;
}
