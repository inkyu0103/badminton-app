import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ClubsService } from 'clubs/clubs.service';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Post('/:userId')
  async createClub(
    @Param('userId', ParseIntPipe) userId: number,
    @Body('clubName') clubName: string,
  ) {
    await this.clubsService.createClub(userId, clubName);
  }
}
