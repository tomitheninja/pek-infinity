import { bootstrap } from './app';

async function devMain(): Promise<void> {
  const { app } = await bootstrap();

  await app.listen(process.env.PORT ?? 3300);

  // eslint-disable-next-line no-console -- only for development
  console.log(`Application is running on: ${await app.getUrl()}`);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises -- main function can't be awaited
devMain();
