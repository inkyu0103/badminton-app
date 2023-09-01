import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ReviewsModule } from 'reviews/reviews.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import {} from '../test/seed';
import { AuthModule } from 'auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { ClubsModule } from 'clubs/clubs.module';

describe('모임과 관련된 E2E 테스트를 진행합니다.', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        ClubsModule,
        ConfigModule,
        ReviewsModule,
        PrismaModule,
        AuthModule,
        MailerModule.forRootAsync({
          useFactory: () => ({
            transport: {
              host: 'smtp.naver.com',
              port: 587,
              auth: {
                user: process.env.SMTP_HOST_EMAIL,
                pass: process.env.SMTP_HOST_PASSWORD,
              },
            },
            defaults: {
              from: '"no-reply" <email address>',
            },
            preview: false,
            template: {
              dir: __dirname + '/templates',
              adapter: new EjsAdapter(),
              options: {
                strict: true,
              },
            },
          }),
        }),
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /clubs', async () => {
    await request(app.getHttpServer()).post('/auth/logout').expect(200);

    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'test@test.com', password: 'testPassword' })
      .expect(200);

    const { header, body } = response;

    return await request(app.getHttpServer())
      .post('/clubs/3000')
      .set('Authorization', `Bearer ${body['accessToken']}`)
      .set('Cookie', [...header['set-cookie']])
      .send({ clubName: 'testClub' })
      .expect(201);
  });
});
