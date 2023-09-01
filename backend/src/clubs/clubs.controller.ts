import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'auth/guards/jwt-auth.guard';
import { ClubsGuard } from 'clubs/clubs.guard';
import { ClubsService } from 'clubs/clubs.service';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @UseGuards(JwtAuthGuard, ClubsGuard)
  @Post('/:userId')
  async createClub(
    @Param('userId', ParseIntPipe) userId: number,
    @Body('clubName') clubName: string,
  ) {
    return await this.clubsService.createClub(userId, clubName);
  }
}
