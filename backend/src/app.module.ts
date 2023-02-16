import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ReviewsController } from './reviews/reviews.controller';
import { ReviewsModule } from './reviews/reviews.module';
import { RacketsModule } from './rackets/rackets.module';

@Module({
  imports: [PrismaModule, UsersModule, ReviewsModule, RacketsModule],
  controllers: [AppController, ReviewsController],
  providers: [AppService],
})
export class AppModule {}
