import { Injectable } from '@nestjs/common';
import { UserClubRepository } from 'user-clubs/user-club.repository';

@Injectable()
export class UserClubService {
  constructor(private readonly userClubRepository: UserClubRepository) {}

  getUserClubs(userId: number) {
    return this.userClubRepository.getUserClubs(userId);
  }

  getClubUsers(clubId: string) {
    return this.userClubRepository.getClubUsers(clubId);
  }
}
