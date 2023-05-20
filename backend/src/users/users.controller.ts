import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from 'users/dto/createUserDto';
import { UsersService } from 'users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/duplicate-nickname')
  async isDuplicateNickname(@Query('nickname') nickname: string) {
    return await this.usersService.isDuplicateNickname(nickname);
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }
}
