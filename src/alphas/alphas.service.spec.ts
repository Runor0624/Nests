import { Test, TestingModule } from '@nestjs/testing';
import { AlphasService } from './alphas.service';

describe('AlphasService', () => {
  let service: AlphasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlphasService],
    }).compile();

    service = module.get<AlphasService>(AlphasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
