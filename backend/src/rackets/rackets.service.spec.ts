import { Test, TestingModule } from '@nestjs/testing';
import { RacketsService } from 'rackets/rackets.service';

describe('RacketsService', () => {
  let service: RacketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RacketsService],
    }).compile();

    service = module.get<RacketsService>(RacketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
