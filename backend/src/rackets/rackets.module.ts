import { Module } from '@nestjs/common';
import { RacketsController } from './rackets.controller';
import { RacketsRepository } from './rackets.repository';
import { RacketsService } from './rackets.service';

@Module({
  controllers: [RacketsController],
  providers: [RacketsService, RacketsRepository],
})
export class RacketsModule {}
