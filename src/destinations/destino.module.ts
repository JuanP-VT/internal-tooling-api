import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DestinosController } from './destino.controller';
import { DestinosService } from './destino.service';
import { AuthMiddleware } from '../auth.middleware';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DestinosController],
  providers: [DestinosService],
})
export class DestinosModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(DestinosController);
  }
}