import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'auth/guards/jwt-auth.guard';
import { ClubsGuard } from 'clubs/clubs.guard';
import { UsersService } from 'users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/usable-nickname')
  async isUsableNickname(@Query('nickname') nickname: string) {
    return await this.usersService.isUsableNickname(nickname);
  }

  @UseGuards(JwtAuthGuard, ClubsGuard)
  @Get('/:userId/clubs')
  async getUserClubs(@Param('userId', ParseIntPipe) userId: number) {
    return await this.usersService.getUserClubs(userId);
  }
}
