import { MiddlewareConsumer, Module } from '@nestjs/common';
import { EnviosController } from './shipments.controller';
import { EnviosService } from './shipments.service';
import { AuthMiddleware } from '../auth.middleware';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EnviosController],
  providers: [EnviosService],
})
export class EnviosModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(EnviosController);
  }
}