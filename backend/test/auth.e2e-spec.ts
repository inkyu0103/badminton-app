import * as cookieParser from 'cookie-parser';
import * as request from 'supertest';

import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthModule } from 'auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PrismaModule } from 'prisma/prisma.module';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

describe('auth와 관련된 E2E 테스트를 진행합니다.', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
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

    app.use(cookieParser());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /auth/signup', () => {
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({
        email: 'mobae@test.com',
        password: 'testpassword',
        birthday: new Date().toISOString(),
        rank: 'A',
        gender: 'MALE',
        nickname: '닉네임',
      })
      .expect(201);
  });

  it('POST /auth/login', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'mobae@test.com',
        password: 'testpassword',
      })
      .expect(200);
  });

  it('GET /auth/validate-token', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'mobae@test.com', password: 'testpassword' });

    const { header } = response;

    return request(app.getHttpServer())
      .get('/auth/validate-token')
      .set('Cookie', [...header['set-cookie']])
      .expect(200);
  });
});
