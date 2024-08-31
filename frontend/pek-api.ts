import { Configuration, DefaultApi } from '../pek-client';

export function getBasePath(): string {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  if (process.env.VERCEL_ENV === 'preview') {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- if VERCEL_ENV is preview, VERCEL_URL is set
    return `https://${process.env.VERCEL_URL!}`;
  }
  throw new Error('NEXT_PUBLIC_API_URL is not set');
}

export class PekApi {
  static get loginPath() {
    return `${getBasePath()}/api/v4/auth/login`;
  }

  private get api(): DefaultApi {
    return new DefaultApi(new Configuration({ basePath: getBasePath() }));
  }

  async ping(): Promise<string> {
    const { data } = await this.api.pingControllerSend();
    return data.ping;
  }
}
