import { Module } from '@nestjs/common';
import { AuthService } from 'auth/auth.service';
import { AuthController } from 'auth/auth.controller';
import { AuthRepository } from 'auth/auth.repository';
import { UsersService } from 'users/users.service';
import { UsersRepository } from 'users/users.repository';
import { LocalStrategy } from 'auth/strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'auth/strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET_KEY,
      }),
    }),
  ],
  providers: [
    AuthService,
    AuthRepository,
    UsersService,
    UsersRepository,
    LocalStrategy,
    JwtStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
