import {
  Controller,
  Post,
  Get,
  Body,
  Patch,
  Delete,
  Param,
  UseGuards,
  Req,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';
import { JwtAuthGuard } from 'auth/guards/jwt-auth.guard';
import { Request } from 'express';
import { CreateReviewDto } from 'reviews/dto/createReviewDto';
import { ReviewsService } from 'reviews/reviews.service';

type RequestWithPassport = Request & { user: { userId: number } };
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get('/:racketId/reviews')
  async getReviews(@Param('racketId', ParseIntPipe) racketId: number) {
    return await this.reviewsService.getReviews(racketId);
  }

  @Get('/:reviewId')
  async getOneReview(@Param('reviewId', ParseIntPipe) reviewId: number) {
    return await this.reviewsService.getOneReview(reviewId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/:racketId')
  async createReview(
    @Body() body: CreateReviewDto,
    @Param('racketId', ParseIntPipe) racketId: number,
    @Req() req: RequestWithPassport,
  ) {
    const { userId } = req.user;
    return await this.reviewsService.createReview(body, racketId, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:reviewId')
  async editReview(
    @Param('reviewId', ParseIntPipe) reviewId: number,
    @Body() body: any,
    @Req() req: RequestWithPassport,
  ) {
    const { userId } = req.user;
    return await this.reviewsService.editReview(reviewId, body, userId);
  }

  @HttpCode(204)
  @Delete('/:reviewId')
  @UseGuards(JwtAuthGuard)
  async deleteReview(
    @Param('reviewId', ParseIntPipe) reviewId: number,
    @Req() req: RequestWithPassport,
  ) {
    const { userId } = req.user;
    await this.reviewsService.deleteReview(reviewId, userId);
  }
}
