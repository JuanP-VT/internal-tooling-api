import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { ReviewService } from './reviews.service';
import { AuthMiddleware } from 'src/auth.middleware';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ReviewsController],
  providers: [ReviewService],
})
export class ReviewsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ReviewsController);
  }
}
