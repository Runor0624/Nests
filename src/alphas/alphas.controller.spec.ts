import { Test, TestingModule } from '@nestjs/testing';
import { AlphasController } from './alphas.controller';
import { AlphasService } from './alphas.service';

describe('AlphasController', () => {
  let controller: AlphasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlphasController],
      providers: [AlphasService],
    }).compile();

    controller = module.get<AlphasController>(AlphasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
