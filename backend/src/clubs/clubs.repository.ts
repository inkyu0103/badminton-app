import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ClubsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createClub(userId: number, clubName: string) {
    return this.prismaService.club.create({
      data: {
        name: clubName,
        UserClub: {
          create: {
            userId,
            role: 'OWNER',
          },
        },
      },
    });
  }
}
