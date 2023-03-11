import {
  Controller,
  Get,
  Body,
  Param,
  Post,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { LocalGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginDto';
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
    return await this.authService.verifyEmailToken(param.emailToken);
  }

  @Post('/login')
  @UseGuards(LocalGuard)
  @HttpCode(200)
  async login(@Body() loginFormData: LoginDto) {
    return this.authService.login(loginFormData);
  }
}
