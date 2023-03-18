import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
//import { PagenationPipe } from './pagination.pipe';
import { RacketsService } from './rackets.service';

@Controller('rackets')
export class RacketsController {
  constructor(private readonly racketsService: RacketsService) {}

  @Get('/:brand')
  async getRacketList(
    @Param('brand') brand: string = 'yonex',
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
  ) {
    return this.racketsService.getRacketList(brand, page);
  }
}
