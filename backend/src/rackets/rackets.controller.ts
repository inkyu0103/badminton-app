import { Controller, Get, Param, Query } from '@nestjs/common';
import { PagenationPipe } from './pagination.pipe';
import { RacketsService } from './rackets.service';

@Controller('rackets')
export class RacketsController {
  constructor(private readonly racketsService: RacketsService) {}

  @Get('/:brand')
  async getRacketList(
    @Param('brand') brand: string,
    @Query('page', PagenationPipe) page: number,
  ) {
    return this.racketsService.getRacketList(brand, page);
  }
}
