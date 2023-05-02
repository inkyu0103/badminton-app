import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IReview } from 'reviews/review.interface';

@Injectable()
export class ReviewsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getAverageScore(racketId: number) {
    const averageScore = await this.prismaService.racketReview.aggregate({
      _avg: {
        starRating: true,
      },
      where: {
        racketId,
      },
    });
    return Number(averageScore._avg.starRating.toFixed(1));
  }

  async getReviews(racketId: number, page: number) {
    const count = await this.prismaService.racketReview.count({
      where: {
        racketId,
      },
    });

    const reviewList = await this.prismaService.racketReview.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            birthday: true,
            gender: true,
            rank: true,
            createdAt: false,
            updatedAt: false,
            password: false,
          },
        },
      },
      where: {
        racketId,
      },
      skip: 7 * (page - 1),
      take: 7,
    });

    return { count, reviewList };
  }

  async getOneReview(reviewId: number) {
    return await this.prismaService.racketReview.findUnique({
      where: {
        id: reviewId,
      },
    });
  }

  async createReview(review: IReview, racketId: number, userId: number) {
    const result = await this.prismaService.racketReview.create({
      data: {
        ...review,
        racketId,
        userId,
      },
    });

    const score = await this.getAverageScore(racketId);

    await this.prismaService.racket.update({
      where: {
        id: racketId,
      },
      data: {
        score,
      },
    });

    return result;
  }

  async editReview(
    racketId: number,
    reviewId: number,
    review: Partial<IReview>,
  ) {
    const result = await this.prismaService.racketReview.update({
      where: {
        id: reviewId,
      },
      data: {
        ...review,
      },
    });

    const score = await this.getAverageScore(racketId);

    await this.prismaService.racket.update({
      where: {
        id: racketId,
      },
      data: {
        score,
      },
    });

    return result;
  }

  async deleteReview(racketId: number, reviewId: number) {
    const result = await this.prismaService.racketReview.delete({
      where: {
        id: reviewId,
      },
    });

    const score = await this.getAverageScore(racketId);

    await this.prismaService.racket.update({
      where: {
        id: racketId,
      },
      data: {
        score,
      },
    });

    return result;
  }
}
