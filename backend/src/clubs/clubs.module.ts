import { Module } from '@nestjs/common';
import { ClubsController } from 'clubs/clubs.controller';
import { ClubsService } from 'clubs/clubs.service';

@Module({
  controllers: [ClubsController],
  providers: [ClubsService],
})
export class ClubsModule {}
