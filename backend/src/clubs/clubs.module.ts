import { Module } from '@nestjs/common';
import { ClubsController } from 'clubs/clubs.controller';
import { ClubsService } from 'clubs/clubs.service';
import { ClubsRepository } from 'clubs/clubs.repository';

@Module({
  controllers: [ClubsController],
  providers: [ClubsService, ClubsRepository],
})
export class ClubsModule {}
