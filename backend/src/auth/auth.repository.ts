import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createEmailVerifyToken(emailToken: string) {
    await this.prismaService.verification.create({
      data: {
        token: emailToken,
      },
    });
  }
}
