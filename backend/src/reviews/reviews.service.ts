import {
  Injectable,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { ReviewsRepository } from 'reviews/reviews.repository';
import { IReview } from 'reviews/review.interface';
import { RacketsRepository } from 'rackets/rackets.repository';

@Injectable()
export class ReviewsService {
  constructor(
    private readonly reviewsRepository: ReviewsRepository,
    private readonly racketsRepository: RacketsRepository,
  ) {}

  async getOneReview(reviewId: number) {
    const review = await this.reviewsRepository.getOneReview(reviewId);

    if (!review) throw new BadRequestException('리뷰가 존재하지 않습니다.');

    return review;
  }

  async getReviews(racketId: number) {
    return await this.reviewsRepository.getReviews(racketId);
  }

  async createReview(review: IReview, racketId: number, userId: number) {
    const racket = await this.racketsRepository.getRacket(racketId);

    if (!racket) throw new BadRequestException('라켓이 존재하지 않습니다.');

    return await this.reviewsRepository.createReview(review, racketId, userId);
  }

  async editReview(
    reviewId: number,
    updatedReview: Partial<IReview>,
    userId: number,
  ) {
    const review = await this.getOneReview(reviewId);

    if (review.userId !== userId)
      throw new ForbiddenException('리뷰를 수정할 권한이 없습니다.');

    return await this.reviewsRepository.editReview(reviewId, updatedReview);
  }

  async deleteReview(reviewId: number, userId: number) {
    const review = await this.getOneReview(reviewId);

    if (review.userId !== userId) {
      throw new ForbiddenException('리뷰를 삭제할 권한이 없습니다.');
    }

    return await this.reviewsRepository.deleteReview(reviewId);
  }
}
