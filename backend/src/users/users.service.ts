import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUser } from '../auth/types/auth.interface';
import { UsersRepository } from 'users/users.repository';
import { UserClubService } from 'user-clubs/user-club.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly userClubService: UserClubService,
  ) {}

  async createUser(createUser: CreateUser) {
    const user = await this.getUser(createUser.email);

    if (user) throw new ConflictException('이미 가입되어있는 사용자입니다.');

    return this.usersRepository.createUser(createUser);
  }

  async getUser(email: string) {
    return this.usersRepository.getUserWithEmail(email);
  }

  async isUsableNickname(nickname: string) {
    const user = await this.usersRepository.getUserWithNickname(nickname);

    if (user) {
      throw new ConflictException('this nickname is already taken');
    }

    return true;
  }

  getUserClubs(userId: number) {
    return this.userClubService.getUserClubs(userId);
  }
}
