import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from 'auth/auth.service';

describe('AuthService', () => {
  let service: AuthService;
  console.log('asdf');
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
