import { DefaultApi, Configuration } from '../pek-client';

export class PekApi {
  private get api(): DefaultApi {
    return new DefaultApi(
      new Configuration({
        basePath: process.env.NEXT_PUBLIC_API ?? 'http://localhost:3000',
      }),
    );
  }

  async ping(): Promise<string> {
    const { data } = await this.api.pingControllerSend();
    return data.ping;
  }
}
