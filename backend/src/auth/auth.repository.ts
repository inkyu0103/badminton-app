import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

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

  async getEmailToken(emailToken: string) {
    const result = await this.prismaService.verification.findUnique({
      where: {
        token: emailToken,
      },
    });

    return result;
  }
}
