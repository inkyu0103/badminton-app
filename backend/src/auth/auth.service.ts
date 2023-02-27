import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { MailerService } from '@nestjs-modules/mailer/dist';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly mailerService: MailerService,
    private readonly jwtSerice: JwtService,
  ) {}

  createVerifyEmailToken(email: string) {
    return this.jwtSerice.sign({ email });
  }

  async sendVerifyEmail(email: string) {
    const emailToken = this.createVerifyEmailToken(email);

    await this.authRepository.createEmailVerifyToken(emailToken);

    await this.mailerService.sendMail({
      to: email,
      from: 'inkyu0103@naver.com',
      subject: '인증메일입니다.',
      text: 'welcome!!',
      html: `<a href="http://${process.env.APP_URL_LOCAL}/signup?token=${emailToken}">회원가입 완료하기</a>`,
    });
  }
}
