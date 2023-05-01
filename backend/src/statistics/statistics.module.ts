import { Module } from '@nestjs/common';
import { StatisticsController } from 'statistics/statistics.controller';
import { StatisticsService } from 'statistics/statistics.service';
import { StatisticsRepository } from 'statistics/statistics.repository';

@Module({
  providers: [StatisticsService, StatisticsRepository],
  controllers: [StatisticsController],
})
export class StatisticsModule {}
