import { serverUserApi } from '@/network/server-api';
import { type UserDto } from '@/pek';

export async function ServerSideProfile() {
  let user: UserDto;
  try {
    const response = await serverUserApi.authControllerMe();
    user = response.data;
  } catch (e) {
    return null;
  }
  return <h1>{user.name}</h1>;
}
