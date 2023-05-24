import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ReviewsModule } from 'reviews/reviews.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

describe('리뷰와 관련된 E2E 테스트를 진행합니다.', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ConfigModule, ReviewsModule, PrismaModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /reviews/:reviewId', () => {
    return request(app.getHttpServer()).get('/reviews/9').expect(400);
  });
});
