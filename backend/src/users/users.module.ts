import { Module } from '@nestjs/common';
import { UsersService } from 'users/users.service';
import { UsersController } from 'users/users.controller';
import { UsersRepository } from 'users/users.repository';

@Module({
  providers: [UsersService, UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}
