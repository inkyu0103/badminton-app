import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IReview } from 'reviews/review.interface';

@Injectable()
export class ReviewsRepository {
  constructor(private readonly prismaService: PrismaService) {}

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
