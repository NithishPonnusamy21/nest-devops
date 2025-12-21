import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getDbSecret } from './config/db-secret';

@Module({
  imports: [
    // 👇 THIS IS THE KEY LINE
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const secret = await getDbSecret();

        return {
          type: 'mysql',
          host: secret.host,
          port: Number(secret.port),
          username: secret.username,
          password: secret.password,
          database: secret.database, // 👈 FIXED
          autoLoadEntities: true,
          synchronize: false,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
