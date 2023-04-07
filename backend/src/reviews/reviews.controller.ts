import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateReviewDto } from 'reviews/dto/createReviewDto';
import { ReviewsService } from 'reviews/reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  async getReviews() {
    return;
  }

  @Get('/:reviewId')
  async getOneReview() {
    return;
  }

  @Post()
  async createReview(@Body() body: CreateReviewDto) {
    try {
      return await this.reviewsService.createReview(body);
    } catch (e) {
      console.log(e);
    }
  }
}
