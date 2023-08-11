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
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthService } from 'auth/auth.service';
import { RequestWithUser } from 'auth/types/auth.interface';
import { TokenExpiredError } from 'jsonwebtoken';
import { SignupForm } from 'auth/dto/signUpDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/verify-email')
  async sendVerifyMail(@Body() body: { email: string }) {
    await this.authService.sendVerifyEmail(body.email);
  }

  @Get('/verify-token/:emailToken')
  async verifyEmailToken(@Param() param: { emailToken: string }) {
    return await this.authService.verifyEmailToken(param.emailToken);
  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  @HttpCode(200)
  async login(
    @Req() req: RequestWithUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken, refreshToken, user } = await this.authService.login(
      req.user,
    );

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      domain: process.env.NEXT_DOMAIN_URL || 'localhost',
    });

    return { accessToken, user };
  }

  @Get('/validate-token')
  async validateToken(@Req() req: Request, @Res() res: Response) {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      throw new UnauthorizedException({ message: 'There is no refresh token' });
    }
    try {
      const result = this.authService.validateRefreshToken(refreshToken);
      res.send(result);
    } catch (e) {
      if (e instanceof TokenExpiredError) {
        res.clearCookie('refreshToken');
        throw new UnauthorizedException({ message: 'Token is Expired' });
      }
    }
  }

  @Post('/logout')
  @HttpCode(200)
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      domain: process.env.NEXT_DOMAIN_URL || 'localhost',
    });
    res.end();
    return;
  }

  @Post('/signup')
  async signup(
    @Body() signupForm: SignupForm,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken, refreshToken, user } = await this.authService.signup(
      signupForm,
    );

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      domain: process.env.NEXT_DOMAIN_URL || 'localhost',
    });
    return { accessToken, user };
  }
}
