import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

export async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app
    .setGlobalPrefix('api')
    .enableVersioning({ type: VersioningType.URI, defaultVersion: '4' });

  return { app };
}
