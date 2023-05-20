import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { ConflictException } from '@nestjs/common/exceptions';
import { User } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(user) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltOrRounds);

    const exists = await this.prismaService.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (exists) {
      throw new ConflictException();
    }

    return await this.prismaService.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        birthday: new Date(user.birthday),
        gender: user.gender,
        rank: user.rank,
        nickname: user.nickname,
      },
      select: {
        email: true,
        nickname: true,
        gender: true,
        rank: true,
        password: false,
      },
    });
  }

  async getUserWithEmail(email: string): Promise<User | null> {
    return await this.prismaService.user.findUnique({
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
