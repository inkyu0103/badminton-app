import { Injectable } from '@nestjs/common';
import { RacketsRepository } from './rackets.repository';

@Injectable()
export class RacketsService {
  constructor(private readonly racketsRepository: RacketsRepository) {}

  async getRacketList(brand: string, page: number) {
    return this.racketsRepository.getRacketList(brand, page);
  }

  async getRacket(racketId: number) {
    return this.racketsRepository.getRacket(racketId);
  }
}
