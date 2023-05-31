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
    const { accessToken, refreshToken, user } = await this.authService.login(
      req.user,
    );

    res.cookie('refreshToken', refreshToken);
    return { accessToken, user };
  }

  @Get('/validate-token')
  async validateToken(@Req() req) {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      throw new UnauthorizedException();
    }

    return this.authService.validateRefreshToken(refreshToken);
  }

  @Post('/logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('refreshToken');
    return;
  }

  @Post('/signup')
  async signup(@Body() body, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken } = await this.authService.signup(body);

    res.cookie('refreshToken', refreshToken);
    console.log('asdf');
    return { accessToken };
  }
}
