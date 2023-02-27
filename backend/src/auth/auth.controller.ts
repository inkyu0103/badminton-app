import { Controller, Get, Body } from '@nestjs/common';
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
}
