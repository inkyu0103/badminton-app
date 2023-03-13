import {
  Controller,
  Get,
  Body,
  Param,
  Post,
  HttpCode,
  UseGuards,
  Res,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';
import { Response } from 'express';
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
    return await this.authService.verifyEmailToken(param.emailToken);
  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  @HttpCode(200)
  async login(@Req() req, @Res({ passthrough: true }) res: Response) {
    const { access_token, refresh_token } = await this.authService.login(
      req.user,
    );

    res.cookie('refresh_token', refresh_token);
    return { access_token };
  }
}
