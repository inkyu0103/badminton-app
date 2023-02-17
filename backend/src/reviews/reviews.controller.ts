import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateReviewDto } from './dto/createReviewDto';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  async getReviews() {}

  @Get('/:reviewId')
  async getOneReview() {}

  @Post()
  async createReview(@Body() body: CreateReviewDto) {
    try {
      return await this.reviewsService.createReview(body);
    } catch (e) {
      console.log(e);
    }
  }
}
