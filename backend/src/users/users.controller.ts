import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from 'users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/usable-nickname')
  async isUsableNickname(@Query('nickname') nickname: string) {
    return await this.usersService.isUsableNickname(nickname);
  }
}
