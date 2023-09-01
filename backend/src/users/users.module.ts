import { Module } from '@nestjs/common';
import { UsersService } from 'users/users.service';
import { UsersController } from 'users/users.controller';
import { UsersRepository } from 'users/users.repository';
import { UserClubService } from 'user-clubs/user-club.service';
import { UserClubRepository } from 'user-clubs/user-club.repository';

@Module({
  providers: [
    UsersService,
    UsersRepository,
    UserClubService,
    UserClubRepository,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
