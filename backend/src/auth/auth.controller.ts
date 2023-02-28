import { Controller, Get, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SendVerifyEmailDto } from './dto/sendVerifyEmailDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async createUser() {}

  @Get('/verify-email')
  async sendVerifyMail(@Body() body: SendVerifyEmailDto) {
    await this.authService.sendVerifyEmail(body.email);
  }

  @Get('/verify-token/:emailToken')
  async verifyEmailToken(@Param() param: { emailToken: string }) {
    try {
      return await this.authService.verifyEmailToken(param.emailToken);
    } catch (e) {
      return e;
    }
  }
}
