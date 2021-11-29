import { Controller, Get, Inject, Query } from '@nestjs/common';
import { HOTEL_SERVICE } from '../../constants';
import { IHotelService } from '../hotel-service/ihotel.service';

@Controller('hotel')
export class HotelController {
  constructor(
    @Inject(HOTEL_SERVICE) private readonly hotelService: IHotelService,
  ) {}

  @Get()
  async get(@Query('start') start: string, @Query('end') end: string) {
    return this.hotelService.getHotels(start, end);
  }
}
