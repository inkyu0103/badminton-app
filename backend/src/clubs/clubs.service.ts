import { Injectable } from '@nestjs/common';
import { ClubsRepository } from 'clubs/clubs.repository';

@Injectable()
export class ClubsService {
  constructor(private readonly clubRepository: ClubsRepository) {}

  createClub(userId: number, clubName: string) {
    return this.clubRepository.createClub(userId, clubName);
  }
}
