import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserClubRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getUserClubs(userId: number) {
    return this.prismaService.userClub.findMany({
      where: {
        userId,
      },
    });
  }

  getClubUsers(clubId: string) {
    return this.prismaService.userClub.findMany({
      where: {
        clubId,
      },
    });
  }
}
