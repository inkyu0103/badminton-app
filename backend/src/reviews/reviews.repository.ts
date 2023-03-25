import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReviewsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createReview(review: any) {
    return this.prismaService.racketReview.create({
      data: {
        userId: 1,
        racketId: 1,
        ...review,
      },
    });
  }
}
