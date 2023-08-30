import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { UsersService } from 'users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/usable-nickname')
  async isUsableNickname(@Query('nickname') nickname: string) {
    return await this.usersService.isUsableNickname(nickname);
  }

  @Get('/:userId/clubs')
  async getUserClubs(@Param('userId', ParseIntPipe) userId: number) {
    return await this.usersService.getUserClubs(userId);
  }
}
