import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsRepository } from './reviews.repository';
import { ReviewsController } from './reviews.controller';

@Module({
  providers: [ReviewsService, ReviewsRepository],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
