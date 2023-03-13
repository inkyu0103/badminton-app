import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from './auth.repository';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/users/users.repository';
import { LocalStrategy } from './strategies/local.strategy';

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
