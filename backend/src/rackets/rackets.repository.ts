import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RacketsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getRacketList(brand: string, page: number) {
    const result = await this.prismaService.racket.findMany({
      where: {
        brand: {
          equals: brand,
          mode: 'insensitive',
        },
      },
      skip: 10 * page,
      take: 10,
    });

    return result;
  }
}
