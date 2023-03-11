import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginFormData, User } from './types/auth.interface';

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

  async validateUser(userInfo: LoginFormData): Promise<User | null> {
    const result = await this.prismaService.user.findFirst({
      where: {
        email: userInfo.email,
      },
    });

    if (!result) {
      throw new UnauthorizedException();
    }

    if (!(await bcrypt.compare(userInfo.password, result.password))) {
      throw new UnauthorizedException();
    }

    return { ...result, ['password']: null };
  }
}
