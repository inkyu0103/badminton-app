import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PositivePipe } from 'common/pagination.pipe';
//import { PagenationPipe } from './pagination.pipe';
import { RacketsService } from 'rackets/rackets.service';

@Controller('rackets')
export class RacketsController {
  constructor(private readonly racketsService: RacketsService) {}

  @Get('/:brand')
  async getRacketList(
    @Param('brand') brand = 'yonex',
    @Query('page', new DefaultValuePipe(1), ParseIntPipe, PositivePipe)
    page: number,
  ) {
    return this.racketsService.getRacketList(brand, page);
  }

  @Get('/:racketId/detail')
  async getRacket(@Param('racketId', ParseIntPipe) racketId: number) {
    return this.racketsService.getRacket(racketId);
  }
}
