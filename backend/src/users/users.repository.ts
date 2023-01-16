import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

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
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    return await this.prismaService.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        birthday: new Date(user.birthday),
        gender: user.gender,
        rank: user.rank,
      },
      select: {
        email: true,
        gender: true,
        rank: true,
        password: false,
      },
    });
  }

  async deleteUser(userId) {
    const exists = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!exists) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }

    return await this.prismaService.user.delete({
      where: {
        id: userId,
      },
    });
  }
}
