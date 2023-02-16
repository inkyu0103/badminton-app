import { Module } from '@nestjs/common';
import { RacketsController } from './rackets.controller';
import { RacketsService } from './rackets.service';

@Module({
  controllers: [RacketsController],
  providers: [RacketsService]
})
export class RacketsModule {}
