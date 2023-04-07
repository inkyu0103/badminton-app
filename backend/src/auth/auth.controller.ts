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
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';
import { Response } from 'express';
import { AuthService } from 'auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/verify-email')
  async sendVerifyMail(@Body() body) {
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

  @Get('/validate-token')
  async validateToken(@Req() req) {
    const { refresh_token } = req.cookies;

    if (!refresh_token) {
      throw new UnauthorizedException();
    }

    return this.authService.validateRefreshToken(refresh_token);
  }

  @Post('/logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('refresh_token');
    return;
  }

  @Post('/signup')
  async signup(@Body() body, @Res({ passthrough: true }) res: Response) {
    const { access_token, refresh_token } = await this.authService.signup(body);

    res.cookie('refresh_token', refresh_token);
    return { access_token };
  }
}
