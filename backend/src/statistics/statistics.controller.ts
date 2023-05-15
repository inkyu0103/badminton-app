import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { StatisticsService } from 'statistics/statistics.service';
import { StatisticsRank } from 'statistics/statistics.type';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('/:racketId')
  async getStatisticsByRacketId(
    @Param('racketId', ParseIntPipe) racketId: number,
    @Query('rank') rank: StatisticsRank,
  ) {
    return this.statisticsService.getStatisticsByRacketIdAndRank(
      racketId,
      rank,
    );
  }
}
