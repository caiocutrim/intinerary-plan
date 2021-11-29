import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { IHotelService } from '../../hotel/hotel-service/ihotel.service';

@Injectable()
export class HotelSchedulerService {
  private readonly logger = new Logger(HotelSchedulerService.name);
  constructor(
    @Inject('HOTEL_SERVICE')
    private readonly hotelService: IHotelService,
  ) {}

  @Cron('2 * * * * *')
  async getHotels() {
    this.logger.debug('I am ready to get hotels from third part api');
    const result = await this.hotelService.storeHotelsFromAPI();
    this.logger.debug(result);
    return result;
  }
}
