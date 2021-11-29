import { Test, TestingModule } from '@nestjs/testing';
import { mockList } from '../../../test/mock-list';
import { HOTEL_SERVICE } from '../../constants';
import { HotelController } from './hotel.controller';

describe('HotelController', () => {
  let controller: HotelController;

  const ServiceProvider = {
    provide: HOTEL_SERVICE,
    useFactory: () => ({
      getHotels: async () => mockList,
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceProvider],
      controllers: [HotelController],
    }).compile();

    controller = module.get<HotelController>(HotelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('it should return an array', async () => {
    const start = '';
    const end = '';
    expect(await controller.get(start, end)).toBeInstanceOf(Array);
  });
});
