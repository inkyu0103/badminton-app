import { Module } from '@nestjs/common';
import { ReviewsService } from 'reviews/reviews.service';
import { ReviewsRepository } from 'reviews/reviews.repository';
import { ReviewsController } from 'reviews/reviews.controller';
import { RacketsRepository } from 'rackets/rackets.repository';
import { StatisticsService } from 'statistics/statistics.service';
import { StatisticsRepository } from 'statistics/statistics.repository';

@Module({
  providers: [
    ReviewsService,
    ReviewsRepository,
    RacketsRepository,
    StatisticsService,
    StatisticsRepository,
  ],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
