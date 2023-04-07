import { Module } from '@nestjs/common';
import { AuthService } from 'auth/auth.service';
import { AuthController } from 'auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from 'auth/auth.repository';
import { UsersService } from 'users/users.service';
import { UsersRepository } from 'users/users.repository';
import { LocalStrategy } from 'auth/strategies/local.strategy';

@Module({
  imports: [JwtModule.register({ secret: process.env.JWT_SECRET_KEY })],
  providers: [
    AuthService,
    AuthRepository,
    UsersService,
    UsersRepository,
    LocalStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
