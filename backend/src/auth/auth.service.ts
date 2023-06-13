import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';
import { AuthRepository } from 'auth/auth.repository';
import { JwtService } from '@nestjs/jwt';
import { User } from 'auth/types/auth.interface';
import { UsersService } from 'users/users.service';
import * as bcrypt from 'bcrypt';
import {
  BadRequestException,
  ConflictException,
} from '@nestjs/common/exceptions';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly mailerService: MailerService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  //a
  createVerifyEmailToken(email: string) {
    return this.jwtService.sign({ email }, { expiresIn: '1h' });
  }
  //sa
  getEmailFromToken(emailToken: string) {
    return this.jwtService.verify(emailToken);
  }

  async sendVerifyEmail(email: string) {
    const emailToken = this.createVerifyEmailToken(email);

    await this.authRepository.createEmailVerifyToken(emailToken);

    await this.mailerService.sendMail({
      to: email,
      from: process.env.SMTP_HOST_EMAIL,
      subject: '인증메일입니다.',
      text: 'welcome!!',
      html: `<a href="http://${process.env.APP_URL_LOCAL}/signup?token=${emailToken}">회원가입 완료하기</a>`,
    });
  }

  async verifyEmailToken(emailToken: string) {
    const result = await this.authRepository.getEmailToken(emailToken);

    if (!result)
      throw new BadRequestException('Token is not exist in database');

    try {
      return this.getEmailFromToken(emailToken);
    } catch (e) {
      throw new UnauthorizedException('email token is expired');
    }
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.getUser(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return null;
    }

    return user;
  }

  async login(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
      nickname: user.nickname,
      rank: user.rank,
      gender: user.gender,
      birthday: user.birthday,
    };

    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '14d' });

    return {
      accessToken,
      refreshToken,
      user: {
        ...payload,
      },
    };
  }

  validateRefreshToken(refreshToken) {
    const result = this.jwtService.verify(refreshToken);

    const payload = {
      email: result.email,
      id: result.id,
      nickname: result.nickname,
      rank: result.rank,
      gender: result.gender,
      birthday: result.birthday,
    };

    const newAccessToken = this.jwtService.sign(payload, { expiresIn: '15m' });

    return { accessToken: newAccessToken, user: { ...payload } };
  }

  async signup(user) {
    const formattedUser = {
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    };

    if (await this.usersService.getUser(user.email))
      throw new ConflictException();

    await this.authRepository.createUser(formattedUser);

    return await this.login(user);
  }
}
