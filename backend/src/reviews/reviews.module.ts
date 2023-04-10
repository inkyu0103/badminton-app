import { Module } from '@nestjs/common';
import { ReviewsService } from 'reviews/reviews.service';
import { ReviewsRepository } from 'reviews/reviews.repository';
import { ReviewsController } from 'reviews/reviews.controller';

@Module({
  providers: [ReviewsService, ReviewsRepository],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
