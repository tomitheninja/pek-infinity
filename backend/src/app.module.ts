import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AuthModule } from './auth/auth.module';
import { GroupModule } from './group/group.module';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [
    PrismaModule.forRoot({ isGlobal: true }),
    PingModule,
    AuthModule,
    GroupModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
