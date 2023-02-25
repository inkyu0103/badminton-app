import { Controller } from '@nestjs/common';
import { RacketsService } from './rackets.service';

@Controller('rackets')
export class RacketsController {
  constructor(private readonly racketsService: RacketsService) {}
}
