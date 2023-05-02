import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StatisticsService } from 'statistics/statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('/:racketId')
  async getStatisticsByRacketId(
    @Param('racketId', ParseIntPipe) racketId: number,
  ) {
    return this.statisticsService.getStatisticsByRacketId(racketId);
  }
}
