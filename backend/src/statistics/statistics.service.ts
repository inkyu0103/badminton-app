import { Injectable } from '@nestjs/common';
import { StatisticsRepository } from 'statistics/statistics.repository';

@Injectable()
export class StatisticsService {
  constructor(private readonly statisticsRepository: StatisticsRepository) {}

  async getStatisticsByRacketId(racketId: number) {
    const control = await this.statisticsRepository.getRacketControl(racketId);
    const power = await this.statisticsRepository.getRacketPower(racketId);
    const weight = await this.statisticsRepository.getRacketWeight(racketId);

    const genders = await this.statisticsRepository.getRacketUserGender(
      racketId,
    );

    const ranks = await this.statisticsRepository.getRacketUserRank(racketId);

    return {
      criteria: {
        control,
        power,
        weight,
      },
      genders,
      ranks,
    };
  }
}
