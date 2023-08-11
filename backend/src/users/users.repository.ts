import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUser } from 'auth/types/auth.interface';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createUser(user: CreateUser) {
    return this.prismaService.user.create({
      data: {
        email: user.email,
        password: user.password,
        birthday: new Date(user.birthday),
        gender: user.gender,
        rank: user.rank,
        nickname: user.nickname,
      },
    });
  }

  getUserWithEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getUserWithNickname(nickname: string): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where: {
        nickname,
      },
    });
  }
}
