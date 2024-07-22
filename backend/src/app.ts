import { NestFactory } from '@nestjs/core';
import { type NestExpressApplication } from '@nestjs/platform-express';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';

export async function bootstrap(): Promise<{ app: NestExpressApplication }> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app
    .setGlobalPrefix('api')
    .enableVersioning({ type: VersioningType.URI, defaultVersion: '4' });

  return { app };
}
