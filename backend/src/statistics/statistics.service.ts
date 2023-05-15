import { Injectable } from '@nestjs/common';
import { StatisticsRepository } from 'statistics/statistics.repository';
import { StatisticsRank } from 'statistics/statistics.type';

@Injectable()
export class StatisticsService {
  constructor(private readonly statisticsRepository: StatisticsRepository) {}

  async getStatisticsByRacketIdAndRank(racketId: number, rank: StatisticsRank) {
    const control = await this.statisticsRepository.getRacketControl(
      racketId,
      rank,
    );
    const power = await this.statisticsRepository.getRacketPower(
      racketId,
      rank,
    );
    const weight = await this.statisticsRepository.getRacketWeight(
      racketId,
      rank,
    );

    const genders = await this.statisticsRepository.getRacketUserGender(
      racketId,
      rank,
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
