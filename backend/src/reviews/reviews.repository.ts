import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import {
  BadRequestException,
  ConflictException,
} from '@nestjs/common/exceptions';

@Injectable()
export class ReviewsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createReview(review: any) {
    return this.prismaService.review.create({
      data: {
        userId: 1,
        racketId: 1,
        ...review,
      },
    });
  }
}
