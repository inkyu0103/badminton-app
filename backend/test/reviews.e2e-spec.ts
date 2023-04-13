import * as dotenv from 'dotenv';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ReviewsModule } from 'reviews/reviews.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { execSync } from 'child_process';
import { PrismaClient } from '@prisma/client';

dotenv.config({
  path: '.env.test',
});

describe('리뷰와 관련된 E2E 테스트를 진행합니다.', () => {
  jest.setTimeout(10000);
  let app: INestApplication;
  const prismaClient = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ConfigModule, ReviewsModule, PrismaModule],
    }).compile();

    execSync('npx prisma db push', {
      env: {
        ...process.env,
      },
    });

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();

    await prismaClient.$disconnect();

    await prismaClient
      .$executeRawUnsafe('DROP SCHEMA  testmobae CASCADE')
      .then(() => {
        console.log('test db의 스키마를 삭제하였습니다.');
      });

    await prismaClient
      .$executeRawUnsafe('CREATE SCHEMA  testmobae ')
      .then(() => {
        console.log('test db의 스키마를 생성하였습니다..');
      });
  });

  it('GET /reviews/:reviewId', () => {
    return request(app.getHttpServer()).get('/reviews/9').expect(400);
  });
});
