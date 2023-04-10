import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'users/dto/createUserDto';
import { UsersService } from 'users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUser() {
    return;
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }
}
