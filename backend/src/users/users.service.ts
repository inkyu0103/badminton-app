import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(user) {
    return await this.usersRepository.createUser(user);
  }

  async deleteUser(userId) {
    return await this.usersRepository.deleteUser(userId);
  }
}