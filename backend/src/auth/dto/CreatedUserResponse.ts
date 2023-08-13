import { Gender, Rank } from '@prisma/client';
import { Expose, Exclude } from 'class-transformer';

export class CreatedUser {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  nickname: string;

  @Expose()
  rank: Rank;

  @Expose()
  gender: Gender;

  @Expose()
  birthday: Date;

  @Exclude()
  password: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
  constructor(createdUser: {
    id: number;
    email: string;
    nickname: string;
    rank: Rank;
    birthday: Date;
    gender: Gender;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = createdUser.id;
    this.email = createdUser.email;
    this.nickname = createdUser.nickname;
    this.rank = createdUser.rank;
    this.birthday = createdUser.birthday;
    this.password = createdUser.password;
    this.gender = createdUser.gender;
    this.createdAt = createdUser.createdAt;
    this.updatedAt = createdUser.updatedAt;
  }
}
