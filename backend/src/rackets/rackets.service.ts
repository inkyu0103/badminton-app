import { Injectable, BadRequestException } from '@nestjs/common';
import { RacketsRepository } from 'rackets/rackets.repository';

@Injectable()
export class RacketsService {
  constructor(private readonly racketsRepository: RacketsRepository) {}

  async getRacketList(brand: string, page: number) {
    return this.racketsRepository.getRacketList(brand, page);
  }

  async getRacket(racketId: number) {
    const racket = await this.racketsRepository.getRacket(racketId);

    if (!racket) throw new BadRequestException('라켓이 존재하지 않습니다.');

    return racket;
  }
}
