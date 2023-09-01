import { Injectable } from '@nestjs/common';
import { ClubRole } from '@prisma/client';
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

  joinClub(userId: number, clubId: string, role: ClubRole) {
    return this.prismaService.userClub.create({
      data: {
        userId,
        clubId,
        role,
      },
    });
  }
}
