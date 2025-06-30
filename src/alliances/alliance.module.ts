import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AlianzasController } from './alliance.controller';
import { AlianzasService } from './alliance.service';
import { AuthMiddleware } from '../auth.middleware';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AlianzasController],
  providers: [AlianzasService],
})
export class AlianzasModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(AlianzasController);
  }
}