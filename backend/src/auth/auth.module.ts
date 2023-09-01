import { Module } from '@nestjs/common';
import { AuthService } from 'auth/auth.service';
import { AuthController } from 'auth/auth.controller';
import { AuthRepository } from 'auth/auth.repository';
import { UsersService } from 'users/users.service';
import { UsersRepository } from 'users/users.repository';
import { LocalStrategy } from 'auth/strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'auth/strategies/jwt.strategy';
import { UserClubService } from 'user-clubs/user-club.service';
import { UserClubRepository } from 'user-clubs/user-club.repository';

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
    UserClubService,
    UserClubRepository,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
