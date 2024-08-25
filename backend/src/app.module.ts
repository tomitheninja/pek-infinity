import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AuthModule } from './auth/auth.module';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), PingModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
