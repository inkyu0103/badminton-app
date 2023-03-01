import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from './auth.repository';

@Module({
  imports: [JwtModule.register({ secret: process.env.JWT_SECRET_KEY })],
  providers: [AuthService, AuthRepository],
  controllers: [AuthController],
})
export class AuthModule {}
