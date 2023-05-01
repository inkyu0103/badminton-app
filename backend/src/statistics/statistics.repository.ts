import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { aggregateByField } from 'statistics/utils';

@Injectable()
export class StatisticsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getRacketUserGender(racketId: number) {
    const result = await this.prismaService.user.groupBy({
      by: ['gender'],
      _count: {
        gender: true,
      },

      where: {
        Review: {
          some: {
            racketId,
          },
        },
      },
    });

    return aggregateByField(result, 'gender');
  }

  async getRacketUserRank(racketId: number) {
    const result = await this.prismaService.user.groupBy({
      by: ['rank'],
      _count: {
        rank: true,
      },

      where: {
        Review: {
          some: {
            racketId,
          },
        },
      },
    });

    return aggregateByField(result, 'rank');
  }

  async getRacketControl(racketId: number) {
    return this.prismaService.racketReview.count({
      where: {
        racketId,
        control: 1,
      },
    });
  }

  async getRacketPower(racketId: number) {
    return this.prismaService.racketReview.count({
      where: {
        racketId,
        power: 1,
      },
    });
  }

  async getRacketWeight(racketId: number) {
    return this.prismaService.racketReview.count({
      where: {
        racketId,
        weight: 1 || 2,
      },
    });
  }
}
