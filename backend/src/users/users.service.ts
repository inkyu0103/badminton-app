import { Injectable, ConflictException } from '@nestjs/common';
import { UsersRepository } from 'users/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(user) {
    return await this.usersRepository.createUser(user);
  }

  async getUser(email: string) {
    return await this.usersRepository.getUserWithEmail(email);
  }

  async isDuplicateNickname(nickname: string) {
    const user = await this.usersRepository.getUserWithNickname(nickname);

    if (user) {
      throw new ConflictException('this nickname is already taken');
    }

    return;
  }
}
