import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';
import { AuthRepository } from './auth.repository';
import { JwtService } from '@nestjs/jwt';
import { User } from './types/auth.interface';
import { UsersService } from 'src/users/users.service';
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
    private readonly jwtSerice: JwtService,
    private readonly usersService: UsersService,
  ) {}

  createVerifyEmailToken(email: string) {
    return this.jwtSerice.sign({ email }, { expiresIn: '1h' });
  }

  getEmailFromToken(emailToken: string) {
    return this.jwtSerice.verify(emailToken, {
      secret: process.env.JWT_SECRET_KEY,
    });
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
    const payload = { email: user.email, id: user.id };
    const access_token = this.jwtSerice.sign(payload, { expiresIn: '15m' });
    const refresh_token = this.jwtSerice.sign(payload, { expiresIn: '14d' });

    return {
      access_token,
      refresh_token,
    };
  }

  validateRefreshToken(refreshToken) {
    const result = this.jwtSerice.verify(refreshToken);

    if (!result) throw new UnauthorizedException();

    const payload = { email: result.email, id: result.id };

    const newAccessToken = this.jwtSerice.sign(payload, { expiresIn: '15m' });

    return newAccessToken;
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
