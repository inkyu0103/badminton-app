import { Test, TestingModule } from '@nestjs/testing';
import { RacketsController } from './rackets.controller';

describe('RacketsController', () => {
  let controller: RacketsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RacketsController],
    }).compile();

    controller = module.get<RacketsController>(RacketsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
