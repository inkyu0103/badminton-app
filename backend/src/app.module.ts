import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { UsersModule } from 'users/users.module';
import { ReviewsModule } from 'reviews/reviews.module';
import { RacketsModule } from 'rackets/rackets.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { AuthModule } from 'auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { StatisticsModule } from 'statistics/statistics.module';
import { ClubsModule } from 'clubs/clubs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'prod' ? '.env.production' : '.env.local',
    }),
    PrismaModule,
    UsersModule,
    ReviewsModule,
    RacketsModule,
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
    AuthModule,
    StatisticsModule,
    ClubsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
