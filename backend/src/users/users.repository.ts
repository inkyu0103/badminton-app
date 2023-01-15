import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltOrRounds);

    try {
      return await this.prismaService.user.create({
        data: {
          email: user.email,
          password: hashedPassword,
          birthday: new Date(user.birthday),
          gender: user.gender,
          rank: user.rank,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}
