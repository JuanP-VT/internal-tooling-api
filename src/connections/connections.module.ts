import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConexionesController } from './connection.controller';
import { ConexionesService } from './connections.service';
import { AuthMiddleware } from '../auth.middleware';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ConexionesController],
  providers: [ConexionesService],
})
export class ConexionesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ConexionesController);
  }
}