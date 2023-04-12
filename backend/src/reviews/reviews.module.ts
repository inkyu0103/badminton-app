import { Module } from '@nestjs/common';
import { ReviewsService } from 'reviews/reviews.service';
import { ReviewsRepository } from 'reviews/reviews.repository';
import { ReviewsController } from 'reviews/reviews.controller';
import { RacketsRepository } from 'rackets/rackets.repository';

@Module({
  providers: [ReviewsService, ReviewsRepository, RacketsRepository],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
