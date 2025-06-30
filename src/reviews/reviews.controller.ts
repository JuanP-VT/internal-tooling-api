import { Controller, Get } from '@nestjs/common';
import { ReviewService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  async getReviews() {
    return this.reviewService.getReviews();
  }
}
