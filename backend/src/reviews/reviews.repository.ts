import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IReview } from 'reviews/review.interface';

@Injectable()
export class ReviewsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getReviews(racketId: number) {
    return this.prismaService.racketReview.findMany({
      where: {
        racketId,
      },
    });
  }

  async getOneReview(reviewId: number) {
    return await this.prismaService.racketReview.findUnique({
      where: {
        id: reviewId,
      },
    });
  }

  async createReview(review: IReview, racketId: number, userId: number) {
    return this.prismaService.racketReview.create({
      data: {
        ...review,
        racketId,
        userId,
      },
    });
  }

  async editReview(reviewId: number, review: any) {
    return this.prismaService.racketReview.update({
      where: {
        id: reviewId,
      },
      data: {
        ...review,
      },
    });
  }

  async deleteReview(reviewId: number) {
    return this.prismaService.racketReview.delete({
      where: {
        id: reviewId,
      },
    });
  }
}
