import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getDbSecret } from './config/db-secret';
import { User } from './users/user.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const secret = await getDbSecret();

        return {
          type: 'mysql',
          host: secret.host,
          port: Number(secret.port),
          username: secret.username,
          password: secret.password,
          database: 'test', 
          autoLoadEntities: true,
          synchronize: false,
        };
      },
    }),

    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
