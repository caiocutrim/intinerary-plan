import { Test, TestingModule } from '@nestjs/testing';
import { HotelServiceService } from './hotel-service.service';

describe('HotelServiceService', () => {
  let service: HotelServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServiceService],
    }).compile();

    service = module.get<HotelServiceService>(HotelServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
