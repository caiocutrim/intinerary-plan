import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Hotel } from '../../models/hotel.schema';
import { HotelService } from './hotel.service';
import { mockList } from '../../../test/mock-list';

describe('HotelService', () => {
  let service: HotelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HotelService,
        {
          provide: getModelToken(Hotel.name),
          useFactory: () => ({
            find: () => mockList,
          }),
        },
      ],
    }).compile();

    service = module.get<HotelService>(HotelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('it should return a hotel list', async () => {
    const start = '';
    const end = '';
    expect(await service.getHotels(start, end)).toBeInstanceOf(Array);
  });
});
