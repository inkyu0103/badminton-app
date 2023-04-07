import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RacketsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getRacketList(brand: string, page: number) {
    const count = await this.prismaService.racket.count({
      where: {
        brand: {
          name: brand,
        },
      },
    });

    const rackets = await this.prismaService.racket.findMany({
      where: {
        brand: {
          name: brand,
        },
      },
      skip: 12 * (page - 1),
      take: 12,
    });

    return {
      count,
      rackets,
    };
  }

  async getRacket(racketId: number) {
    const result = await this.prismaService.racket.findUnique({
      where: {
        id: racketId,
      },
    });

    return result;
  }
}
