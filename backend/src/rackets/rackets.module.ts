import { Module } from '@nestjs/common';
import { RacketsController } from 'rackets/rackets.controller';
import { RacketsRepository } from 'rackets/rackets.repository';
import { RacketsService } from 'rackets/rackets.service';

@Module({
  controllers: [RacketsController],
  providers: [RacketsService, RacketsRepository],
})
export class RacketsModule {}
