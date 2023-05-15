import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { aggregateByField } from 'statistics/utils';
import { StatisticsRank } from 'statistics/statistics.type';

@Injectable()
export class StatisticsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getRacketUserGender(racketId: number, rank: StatisticsRank) {
    const result = await this.prismaService.user.groupBy({
      by: ['gender'],
      _count: {
        gender: true,
      },

      where: {
        rank: rank === 'ALL' ? { in: ['S', 'A', 'B', 'C', 'D'] } : rank,
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

  async getRacketControl(racketId: number, rank: StatisticsRank) {
    return this.prismaService.racketReview.count({
      where: {
        control: 0,
        user: {
          rank: rank === 'ALL' ? { in: ['S', 'A', 'B', 'C', 'D'] } : rank,
        },
      },
    });
  }

  async getRacketPower(racketId: number, rank: StatisticsRank) {
    return this.prismaService.racketReview.count({
      where: {
        racketId,
        power: 0,
        user: {
          rank: rank === 'ALL' ? { in: ['S', 'A', 'B', 'C', 'D'] } : rank,
        },
      },
    });
  }

  async getRacketWeight(racketId: number, rank: StatisticsRank) {
    return this.prismaService.racketReview.count({
      where: {
        racketId,
        // change constans or enum
        weight: 0 || 1,
        user: {
          rank: rank === 'ALL' ? { in: ['S', 'A', 'B', 'C', 'D'] } : rank,
        },
      },
    });
  }
}
